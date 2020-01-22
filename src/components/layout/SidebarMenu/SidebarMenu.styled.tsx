import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type SidebarWrapperProps = BaseBoxProps

export const SidebarWrapper: React.FC<SidebarWrapperProps> = styled(Box)<
  SidebarWrapperProps
>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  box-sizing: border-box;
  justify-content: stretch;
  ${props =>
    css({
      width: 'xl',
      borderRight: 'primary',
      borderRightWidth: 'normal',
    })}
`

export const SidebarContent: React.FC<BaseBoxProps> = styled(Box)<BaseBoxProps>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export type MenuItemProps = BaseBoxProps

export const MenuItem: React.FC<MenuItemProps> = styled(Box)<MenuItemProps>``

export type ButtonWrapperProps = BaseBoxProps

export const ButtonWrapper: React.FC<ButtonWrapperProps> = styled(Box)<
  ButtonWrapperProps
>``
