import styled from 'styled-components'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

interface WrapperRelatedProps {
  isVertical?: boolean
  baseSize: number
}

export type WrapperProps = BaseBoxProps & WrapperRelatedProps

export const Wrapper = styled(Box)<WrapperProps>`
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
`
