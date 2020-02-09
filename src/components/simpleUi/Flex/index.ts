import React from 'react'
import styled from 'styled-components'

import {
  flexbox,
  FlexboxProps,
  FlexProps,
  JustifySelfProps,
  AlignSelfProps,
  OrderProps,
  flexGrow,
  FlexGrowProps,
} from 'styled-system'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type BaseFlexProps = BaseBoxProps & FlexboxProps

const Flex: React.FC<BaseFlexProps> = styled(Box)<BaseFlexProps>`
  ${flexbox};
  display: flex;
`

export type BaseFlexItemProps = BaseBoxProps &
  FlexProps &
  FlexGrowProps &
  JustifySelfProps &
  AlignSelfProps &
  OrderProps

export const FlexItem: React.FC<BaseFlexItemProps> = styled(Box)<
  BaseFlexItemProps
>`
  ${flexbox}
  ${flexGrow}
`

export default Flex
