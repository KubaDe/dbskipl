import React from 'react'
import styled from 'styled-components'

import {
  grid,
  GridProps,
  gridArea,
  GridAreaProps,
  alignSelf,
  AlignSelfProps,
  justifySelf,
  JustifySelfProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  zIndex,
  ZIndexProps,
  alignItems,
  AlignItemsProps,
  justifyItems,
  JustifyItemsProps,
  justifyContent,
  JustifyContentProps,
  alignContent,
  AlignContentProps,
} from 'styled-system'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type BaseGridProps = BaseBoxProps &
  GridProps &
  AlignItemsProps &
  JustifyItemsProps &
  JustifyContentProps &
  AlignContentProps

const Grid: React.FC<BaseGridProps> = styled(Box).attrs({
  display: 'grid',
})<BaseGridProps>`
  ${grid}
  ${alignItems}
  ${justifyItems}
  ${justifyContent}
  ${justifyContent}
  ${alignContent}
`

export type BaseGridItemProps = BaseBoxProps &
  GridAreaProps &
  AlignSelfProps &
  JustifySelfProps &
  GridColumnProps &
  GridRowProps &
  ZIndexProps

export const GridItem: React.FC<BaseGridItemProps> = styled(Box)<
  BaseGridItemProps
>`
  ${gridArea}
  ${alignSelf}
  ${justifySelf}
  ${gridRow}
  ${gridColumn}
  ${zIndex}
`

export default Grid
