import React, { ChangeEvent, useMemo, useState } from 'react'
import { useMachine } from '@xstate/react'
import debounce from 'lodash/debounce'
import ShallowLink from 'components/helpers/ShallowLink'

import Box from 'components/simpleUi/Box'
import Flex from 'components/simpleUi/Flex'
import BgText from 'components/typography/BgText'
import {
  eventFactory,
  getSectionMachine,
  ScrollBlock,
} from 'components/layout/buildingBlocks/ScrollBlocks'
import HorizontalAxis from 'components/ui/ScrollBubbles/HorizontalAxis'
import Bubble from 'components/ui/ScrollBubbles/Bubble'
import BigBubble from 'components/ui/BigBubble'
import { SectionContent } from 'components/layout/buildingBlocks/SectionContent'

import { Company } from '__data__/company/List'
import SectionLayout from './SectionLayout.desktop.motion'
import Dots from './Dots.motion'

const useDebouncedMouseHover = (
  time: number = 500,
  init: number = 0,
): {
  mouseOn: number
  setMouseOn: (i: number) => void
} => {
  const [mouseOn, _setMouseOn] = useState(init)
  const setMouseOn = useMemo(
    () =>
      debounce((i: number) => {
        _setMouseOn(i)
      }, time),
    [time],
  )
  return {
    mouseOn,
    setMouseOn,
  }
}

interface SectionRelatedProps {
  experiences: Company[]
  onBubbleClick: (e: ChangeEvent<HTMLAnchorElement> & MouseEvent) => void
}

const experienceSectionMachine = getSectionMachine({
  id: 'experience-machine',
})

type SectionProps = SectionRelatedProps
const Section: React.FC<SectionProps> = ({
  experiences,
  onBubbleClick,
}: SectionProps) => {
  const [current, send] = useMachine(experienceSectionMachine)
  const state: string[] = current.toStrings()
  const onProgressChange = (progress: number): void => {
    !current.done && send(eventFactory(progress))
  }
  const { mouseOn, setMouseOn } = useDebouncedMouseHover(
    10,
    experiences.length - 1,
  )
  const bigBubbleText =
    !isNaN(mouseOn) && mouseOn !== -1 ? experiences[mouseOn] : {}
  const mouseHoverActions = useMemo(
    () =>
      experiences.map((experience, i) => ({
        onMouseEnter: () => setMouseOn(i),
        onMouseLeave: () => setMouseOn(experiences.length - 1),
      })),
    [experiences, setMouseOn],
  )
  return (
    <ScrollBlock onProgressChange={onProgressChange} overflow="hidden">
      <SectionLayout animate={state}>
        <SectionContent px="xs">
          <Dots/>
          <Flex
            position="relative"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <BigBubble
              {...bigBubbleText}
              position="absolute"
              top="10%"
              left="0"
              right="0"
              mx="auto"
              zIndex={1}
            />
            <BgText
              position="absolute"
              top="10%"
              left="3xl"
              m="md"
              padSize="md"
              as="h1"
              fontSize={{ _: 'display4', xl: 'display2', '2xl': 'display1' }}
              fontFamily="secondary"
            >
              Professional <br />
              experience
            </BgText>

            <Box
              position="absolute"
              bottom="15%"
              width={{ _: '100%', '2xl': '80%' }}
            >
              <HorizontalAxis
                bubbles={experiences.map((experience, i) => (
                  <ShallowLink href={`/?company=${experience.slug}`}>
                    <Bubble
                      key={i}
                      title={experience.title}
                      items={[experience.start, experience.end]}
                      isOpen={i === mouseOn}
                      {...mouseHoverActions[i]}
                      name={experience.slug}
                      onClick={onBubbleClick}
                      as="a"
                    />
                  </ShallowLink>
                ))}
              />
            </Box>
          </Flex>
        </SectionContent>
      </SectionLayout>
    </ScrollBlock>
  )
}

export default Section
