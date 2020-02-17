import React from 'react'
import { useMachine } from '@xstate/react'

import { ScrollBlock } from 'components/layout/buildingBlocks/ScrollBlocks'
import HorizontalAxis from 'components/ui/ScrollBubbles/HorizontalAxis'
import Bubble from 'components/ui/ScrollBubbles/Bubble'

import {
  ProgressEvent,
  getExperienceSectionMachine,
} from './ExperienceSection.machine'
import Wrapper from './Wrapper.motion'
import Floating from './Floating.motion'

const bubbles = [
  (isOpen: boolean) => (
    <Bubble
      isOpen={isOpen}
      title="Acme Inc"
      items={['February 2018', 'May 2019']}
    />
  ),
  (isOpen: boolean) => (
    <Bubble
      isOpen={isOpen}
      title="Acme Inc"
      items={['February 2018', 'May 2019']}
    />
  ),
  (isOpen: boolean) => (
    <Bubble
      isOpen={isOpen}
      title="Acme Inc"
      items={['February 2018', 'May 2019']}
    />
  ),
  (isOpen: boolean) => (
    <Bubble
      isOpen={isOpen}
      title="Acme Inc"
      items={['February 2018', 'May 2019']}
    />
  ),
]

const ExperienceSectionMachine = getExperienceSectionMachine(bubbles.length)

const eventFactory = (progress: number): ProgressEvent => ({
  type: 'THRESHOLD',
  progress,
})

const Section: React.FC = () => {
  const [current, send] = useMachine(ExperienceSectionMachine)
  const state: string[] = current.toStrings()

  const onProgressChange = (progress: number): void => {
    !current.done && send(eventFactory(progress))
  }

  const openBubbleI = state[1]?.split('.')[1]
  return (
    <ScrollBlock
      onProgressChange={onProgressChange}
      maxHeight="10000px"
      backgroundColor="primary"
      overflow="hidden"
    >
      <Wrapper animate={state[0] || ''}>
        <Floating>
          <HorizontalAxis
            bubbles={bubbles.map((bubble, i) =>
              bubble(i === Number(openBubbleI)),
            )}
          />
        </Floating>
      </Wrapper>
    </ScrollBlock>
  )
}

export default Section
