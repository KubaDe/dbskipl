import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload'
import times from 'lodash/times'
import { useMachine } from '@xstate/react'

import inject from 'hoc/inject'
import {
  FullPageModal,
  useFullPageModalController,
} from 'components/ui/FullPageModal'
import {
  SectionContent,
  SectionLayout,
} from 'components/layout/buildingBlocks/SectionContent'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'
import {
  eventFactory,
  getSectionMachine,
  ScrollBlock,
} from 'components/layout/buildingBlocks/ScrollBlocks'
import Flex from 'components/simpleUi/Flex'
import BgText from 'components/typography/BgText'
import Grid from 'components/simpleUi/Grid'

import Title from './Title.motion'
import Bubble from './Bubble.motion'
import InstagramItem from './InstagramItem.motion'
import PhotoModalContent from './PhotoModalContent'

import useInstagramPhotos, {
  InstagramPhoto,
  InstagramPhotos,
} from 'hooks/useInstagramPhotos'

const InstagramGrid = inject(Grid, {
  gridTemplateColumns: {
    _: '80vw',
    md: 'repeat(2, 30vw)',
    lg: 'repeat(3, 15vw)',
  },
  gridAutoRows: { _: '80vw', md: '30vw', lg: '15vw' },
  gridGap: 'xl',
})

const sectionMachine = getSectionMachine({
  id: 'photography-intro-machine',
  thresholds: [0.1, 1.55],
})

const usePhotoScroll = (
  instagramPhotos: InstagramPhotos | null,
): {
  activePhoto: InstagramPhoto | null
  setActivePhoto: (photo: InstagramPhoto | null) => void
  nextPhoto: InstagramPhoto | null
  previousPhoto: InstagramPhoto | null
} => {
  const [activePhoto, setActivePhoto] = useState<InstagramPhoto | null>(null)
  let nextPhoto = null
  let previousPhoto = null
  if (instagramPhotos && activePhoto) {
    const activePhotoIndex = instagramPhotos.data.indexOf(activePhoto)
    nextPhoto = instagramPhotos.data[activePhotoIndex + 1] || null
    previousPhoto = instagramPhotos.data[activePhotoIndex - 1] || null
  }
  return {
    activePhoto,
    setActivePhoto,
    nextPhoto,
    previousPhoto,
  }
}

const Section: React.FC = () => {
  const { setIsInverted } = useMenuBarController()
  const [current, send] = useMachine(sectionMachine)
  const [state] = current.toStrings()
  const onProgressChange = (progress: number): void => {
    !current.done && send(eventFactory(progress))
  }
  useEffect(() => {
    state === 'active' && setIsInverted(true)
  }, [state])
  const instagramPhotos = useInstagramPhotos()
  const {
    nextPhoto,
    previousPhoto,
    activePhoto,
    setActivePhoto,
  } = usePhotoScroll(instagramPhotos)
  const resetActivePhoto = useCallback(() => setActivePhoto(null), [])
  const fullPageModalController = useFullPageModalController()
  const onPhotoClick = useCallback(
    (e: ChangeEvent<HTMLAnchorElement> & MouseEvent, photo: InstagramPhoto) => {
      setActivePhoto(photo)
      fullPageModalController.open({
        triggerPoint: {
          x: e.clientX,
          y: e.clientY,
        },
      })
    },
    [fullPageModalController],
  )
  useEffect(() => {
    fullPageModalController.subscribe('close', resetActivePhoto)
    return () => {
      fullPageModalController.unsubscribe('close', resetActivePhoto)
    }
  }, [fullPageModalController, resetActivePhoto])
  return (
    <>
      <ScrollBlock
        onProgressChange={onProgressChange}
        overflow="hidden"
        borderTop="inverted"
      >
        <SectionLayout backgroundColor="black" overflow="hidden">
          <SectionContent
            pt={{ sm: '3xl', md: '3xl' }}
            width="100%"
            px="0"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <a href="https://instagram.com/dbski.j/" target="_blank">
              <LazyLoad offset={400}>
                <Title animate={state}>
                  <Bubble animate={state} />
                  <BgText
                    fontSize={{
                      _: 'display3',
                      md: 'display2',
                      lg: 'display2',
                      xl: 'display1',
                      '2xl': '6vw',
                    }}
                    fontFamily="secondary"
                    padSize="sm"
                    zIndex={2}
                  >
                    Instagram
                  </BgText>
                  <BgText
                    fontSize={{
                      _: 'h3',
                    }}
                    mt="-3px"
                    padSize="sm"
                    zIndex={2}
                  >
                    dbski.j
                  </BgText>
                </Title>
              </LazyLoad>
            </a>
            <Flex
              alignItems="center"
              justifyContent="center"
              py="3xl"
              pb="128px"
            >
              <LazyLoad offset={400}>
                <InstagramGrid>
                  {times(12).map(i => {
                    if (!instagramPhotos || !instagramPhotos?.data[i]) {
                      return null
                    }
                    return (
                      <InstagramItem
                        instagramPhoto={instagramPhotos?.data[i]}
                        onClick={e => onPhotoClick(e, instagramPhotos?.data[i])}
                        key={instagramPhotos?.data[i]?.timestamp}
                      />
                    )
                  })}
                </InstagramGrid>
              </LazyLoad>
            </Flex>
          </SectionContent>
        </SectionLayout>
      </ScrollBlock>
      <FullPageModal fullPageModalController={fullPageModalController}>
        {activePhoto && (
          <PhotoModalContent
            close={fullPageModalController.close}
            photo={activePhoto}
            nextPhoto={nextPhoto}
            previousPhoto={previousPhoto}
            setActivePhoto={setActivePhoto}
          />
        )}
      </FullPageModal>
    </>
  )
}

export default Section
