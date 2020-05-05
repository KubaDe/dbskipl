import React, { useEffect } from 'react'
import { useMachine } from '@xstate/react'

import inject from 'hoc/inject'
import {
  SectionContent,
  SectionLayout,
} from 'components/layout/buildingBlocks/SectionContent'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'
import Box from 'components/simpleUi/Box'
import BgText from 'components/typography/BgText'
import {
  eventFactory,
  getSectionMachine,
  ScrollBlock,
} from 'components/layout/buildingBlocks/ScrollBlocks'

import HalfCover from './HalfCover.motion'
import Disk from './Disk.motion'
import DiskWrapper from './DiskWrapper.motion'
import Wrapper from './Wrapper.motion'
import TitleWrapper from './TitleWrapper.motion'
import SubtitleWrapper from './SubtitleWrapper.motion'

const TitleWord = inject(Box, {
  width: '450px',
  display: 'inline-block',
  px: 'lg',
  as: 'span',
  zIndex: 1,
})

const experienceSectionMachine = getSectionMachine({
  id: 'hero-machine',
  thresholds: [0.6, 1.55],
})

const Section: React.FC = () => {
  const { setIsInverted } = useMenuBarController()
  const [current, send] = useMachine(experienceSectionMachine)
  const [state] = current.toStrings()
  const onProgressChange = (progress: number): void => {
    !current.done && send(eventFactory(progress))
  }
  useEffect(() => {
    state === 'active' && setIsInverted(true)
  }, [state])
  return (
    <ScrollBlock onProgressChange={onProgressChange} overflow="hidden">
      <SectionLayout backgroundColor="inverted" overflow="hidden">
        <Wrapper>
          <HalfCover />
          <SectionContent
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            pt={{ _: '86px', md: '0' }}
            pb="3xl"
            width="auto"
            px="0"
          >
            <DiskWrapper>
              <Disk />
            </DiskWrapper>
            <TitleWrapper>
              <TitleWord
                textAlign={{ _: 'center', md: 'right' }}
                fontFamily="secondary"
              >
                <BgText>Photography</BgText>
              </TitleWord>
              <BgText textAlign="center" my="-10px" zIndex={0}>
                x
              </BgText>
              <TitleWord textAlign={{ _: 'center', md: 'left' }}>
                <BgText>Software</BgText>
              </TitleWord>
            </TitleWrapper>
            <SubtitleWrapper>
              <BgText>by Jakub Dębski</BgText>
            </SubtitleWrapper>
          </SectionContent>
        </Wrapper>
      </SectionLayout>
    </ScrollBlock>
  )
}

export default Section
