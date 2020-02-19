import styled from 'styled-components'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type BubbleWrapperProps = BaseBoxProps

export const BubbleWrapper = styled(Box)`
  pointer-events: auto;
  cursor: pointer;
`
