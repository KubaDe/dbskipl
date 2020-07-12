import React, { ElementType, ReactNode } from 'react'
import styled from 'styled-components'

import invisibility from 'config/mixins/invisibility'

import {
  color,
  ColorProps,
  background,
  BackgroundProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  boxShadow,
  BoxShadowProps,
  border,
  BorderProps,
  size,
  SizeProps,
  position,
  PositionProps,
} from 'styled-system'

interface ComponentProps {
  as?: ElementType
  children?: ReactNode
  invisible?: string | string[]
  ref?: any
  style?: object
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: (e: any) => void // TODO: Find better solution
  className?: string
  name?: string
  id?: string
  rel?: string
  target?: string
  href?: string
  title?: string
  value?: string
}

export type BaseBoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  BackgroundProps &
  BoxShadowProps &
  BorderProps &
  PositionProps &
  SizeProps &
  ComponentProps

const Box: React.FC<BaseBoxProps> = styled.div<BaseBoxProps>`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${background}
  ${boxShadow}
  ${border}
  ${size}
  ${position}
  ${invisibility}
`

export default Box
