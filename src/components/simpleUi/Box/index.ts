import React, { ElementType, ReactNode } from 'react'
import styled from 'styled-components'

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

export type BaseBoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  BackgroundProps &
  BoxShadowProps &
  BorderProps &
  PositionProps &
  SizeProps & { as?: ElementType, children?: ReactNode }

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
`

export default Box
