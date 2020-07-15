import React, { useEffect } from 'react'
import LazyLoad from 'react-lazyload'
import { useMachine } from '@xstate/react'
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
import Spike from './Spike.motion'
import Avatar from './Avatar.motion'
import Title from './Title.motion'
import Subtitle from './Subtitle.motion'
import DotsPlanet from './DotsPlanet.motion'

const sectionMachine = getSectionMachine({
  id: 'photography-intro-machine',
  thresholds: [0.4, 1.55],
})

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
  return (
    <ScrollBlock onProgressChange={onProgressChange} overflow="hidden">
      <SectionLayout backgroundColor="black" overflow="hidden">
        <LazyLoad offset={400}>
          <SectionContent
            pt={{ sm: '2xl', md: '3xl' }}
            width="100%"
            px="0"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              position="relative"
              pt={{ _: '128px', md: '64px', lg: '128px' }}
            >
              <Flex>
                <Spike reversed animate={state} />
                <Spike animate={state} />
              </Flex>
              <Flex>
                <Spike
                  reversed
                  mr={{ md: '80px', lg: '140px' }}
                  animate={state}
                  delay={0.2}
                />
                <Spike
                  ml={{ md: '80px', lg: '140px' }}
                  animate={state}
                  delay={0.2}
                />
              </Flex>
              <Flex>
                <Spike reversed animate={state} delay={0.4} />
                <Spike animate={state} delay={0.4} />
              </Flex>
              <Avatar animate={state} />
              <Title animate={state}>
                <BgText
                  fontSize={{
                    _: 'h2',
                    md: 'display2',
                    lg: 'display2',
                    xl: 'display1',
                    '2xl': '6vw',
                  }}
                  fontFamily="secondary"
                  padSize="lg"
                >
                  Photography
                </BgText>
              </Title>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              position="relative"
              py={{ _: '64px', md: '64px', lg: '128px' }}
              minHeight={{ sm: '400px' }}
            >
              <DotsPlanet animate={state} />
              <Subtitle position="absolute" animate={state}>
                <BgText
                  fontSize={{ _: 'h4', md: 'h3', lg: 'h2' }}
                  fontWeight={100}
                >
                  by Jakub Dębski
                </BgText>
              </Subtitle>
            </Flex>
          </SectionContent>
        </LazyLoad>
      </SectionLayout>
    </ScrollBlock>
  )
}

export default Section
