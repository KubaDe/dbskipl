import React, { useMemo, useState } from 'react'
import { useMachine } from '@xstate/react'
import debounce from 'lodash/debounce'

import Box from 'components/simpleUi/Box'
import BgText from 'components/typography/BgText'
import { ScrollBlock } from 'components/layout/buildingBlocks/ScrollBlocks'
import HorizontalAxis from 'components/ui/ScrollBubbles/HorizontalAxis'
import Bubble from 'components/ui/ScrollBubbles/Bubble'
import BigBubble from 'components/ui/BigBubble'

import {
  ProgressEvent,
  getExperienceSectionMachine,
} from './ExperienceSection.machine'
import Wrapper from './Wrapper.motion'
import Floating from './Floating.motion'

import experiencesJson from './__data__/experiences.json'
import { Experiences } from './__data__/Experiences'
const experiences = experiencesJson as Experiences

const bubbles = experiences.map(
  experience => (props: {
    isOpen: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
  }) => (
    <Bubble
      {...props}
      title={experience.title}
      items={[experience.start, experience.end]}
    />
  ),
)

const ExperienceSectionMachine = getExperienceSectionMachine(bubbles.length)

const eventFactory = (progress: number): ProgressEvent => ({
  type: 'THRESHOLD',
  progress,
})

const useDebouncedMouseHover = (): {
  mouseOn: number
  setMouseOn: (i: number) => void
} => {
  const [mouseOn, _setMouseOn] = useState(-1)
  const setMouseOn = useMemo(
    () =>
      debounce((i: number) => {
        _setMouseOn(i)
      }, 500),
    [_setMouseOn],
  )
  return {
    mouseOn,
    setMouseOn,
  }
}

const Section: React.FC = () => {
  const [current, send] = useMachine(ExperienceSectionMachine)

  const state: string[] = current.toStrings()

  const onProgressChange = (progress: number): void => {
    !current.done && send(eventFactory(progress))
  }

  const { mouseOn, setMouseOn } = useDebouncedMouseHover()
  const openBubbleI = mouseOn !== -1 ? mouseOn : Number(state[1]?.split('.')[1])
  const bigBubbleText =
    !isNaN(openBubbleI) && openBubbleI !== -1 ? experiences[openBubbleI] : {}
  return (
    <ScrollBlock
      onProgressChange={onProgressChange}
      maxHeight="10000px"
      backgroundColor="primary"
      overflow="hidden"
    >
      <Wrapper animate={state[0] || ''}>
        <Floating>
          <BigBubble
            {...bigBubbleText}
            position="absolute"
            top="3xl"
            left="0"
            right="0"
            mx="auto"
          />
          <BgText
            position="absolute"
            top="3xl"
            left="3xl"
            m="md"
            padSize="md"
            as="h1"
            fontSize={{ _: 'display4', xl: 'display2' }}
            fontFamily="secondary"
          >
            Professional <br />
            experience
          </BgText>

          <Box position="absolute" bottom="150px" width="100%">
            <HorizontalAxis
              bubbles={bubbles.map((bubble, i) =>
                bubble({
                  isOpen: i === openBubbleI,
                  onMouseEnter: () => setMouseOn(i),
                  onMouseLeave: () => setMouseOn(-1),
                }),
              )}
            />
          </Box>
        </Floating>
      </Wrapper>
    </ScrollBlock>
  )
}

export default Section
