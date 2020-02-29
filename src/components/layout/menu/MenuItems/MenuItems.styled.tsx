import React from 'react'
import styled from 'styled-components'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type MenuItemProps = BaseBoxProps

export const MenuItem: React.FC<MenuItemProps> = styled(Box).attrs({
  my: { md: 'sm', _: 'md' },
})<MenuItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
`
