import React from 'react'
import styled from 'styled-components'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type StyledBoxProps = BaseBoxProps

export const StyledBox: React.FC<StyledBoxProps> = styled(Box)`
  overflow-x: hidden;
  overflow-y: scroll;
`
