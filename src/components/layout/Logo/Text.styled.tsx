import styled from 'styled-components'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

interface TextRectRelatedProps {
  isVertical?: boolean
  baseSize: number
}

export type TextRectProps = BaseBoxProps & TextRectRelatedProps

export const TextRect = styled(Box)<TextRectProps>`
  border: 2px solid;
  border-left: none;
  height: ${props => props.baseSize}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.baseSize * 0.66}px;
  letter-spacing: ${props => props.baseSize * 0.05}px;
  font-weight: 200;
  box-sizing: border-box;
  overflow: hidden;
`
