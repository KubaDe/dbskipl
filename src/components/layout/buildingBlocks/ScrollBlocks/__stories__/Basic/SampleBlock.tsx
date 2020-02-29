import React from 'react'
import { useMachine } from '@xstate/react'

import { ScrollBlockProps } from '../../'
import SampleBlockMachine, { ThresholdEvent } from './SampleBlock.machine'
import { StyledScrollBlock } from './SampleBlock.styled'

const thresholdEventFactory = (progress: number): ThresholdEvent => ({
  type: 'THRESHOLD',
  progress,
})

type SampleBlockProps = ScrollBlockProps

const SampleBlock: React.FC<SampleBlockProps> = props => {
  const [current, send] = useMachine(SampleBlockMachine)
  const state: string = String(current.value)

  const onProgressChange = (progress: number): void => {
    !current.done && send(thresholdEventFactory(progress))
  }

  return (
    <StyledScrollBlock
      onProgressChange={onProgressChange}
      height="100vh"
      maxHeight="3000px"
      state={state}
      {...props}
    >
      Block 2
    </StyledScrollBlock>
  )
}

export default SampleBlock
