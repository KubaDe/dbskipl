import styled from 'styled-components'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

interface IconRelatedProps {
  maskImage: string
}

export type IconProps = BaseBoxProps & IconRelatedProps

export const Icon = styled(Box)<IconProps>`
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  mask-image: url("${props => props.maskImage}");
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: 85% 85%;
  
  box-sizing: border-box;
`

interface IconRectRelatedProps {
  isVertical?: boolean
  baseSize: number
}

export type IconRectProps = BaseBoxProps & IconRectRelatedProps

export const IconRect = styled(Box)<IconRectProps>`
  height: ${props => props.baseSize}px;
  width: ${props => props.baseSize}px;
  box-sizing: border-box;
`
