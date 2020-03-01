import styled from 'styled-components'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type BubbleSVGWrapperProps = BaseBoxProps
export const BubbleSVGWrapper = styled(Box)`
  pointer-events: auto;
  cursor: pointer;
`

export type StyledBubbleWrapperProps = BaseBoxProps
export const StyledBubbleWrapper = styled(Box)`
  display: block;
  color: inherit;
  text-decoration: inherit;
  &:focus {
    outline: none;
  }
`
