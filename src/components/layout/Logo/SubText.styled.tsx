import React from 'react'
import styled from 'styled-components'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

interface SubTextRectRelatedProps {
  isVertical?: boolean
  baseSize: number
}

export type SubTextRectProps = BaseBoxProps & SubTextRectRelatedProps

export const SubTextRect = styled(Box)<SubTextRectRelatedProps>`
  border: 2px solid black;
  border-top: none;
  font-weight: 200;
  letter-spacing: ${props => props.baseSize * 0.01}px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
`

export type SubTextMaskProps = BaseBoxProps
export const SubTextMask: React.FC<SubTextMaskProps> = styled(Box).attrs({
  as: 'span',
})<SubTextMaskProps>`
  overflow: hidden;
`
