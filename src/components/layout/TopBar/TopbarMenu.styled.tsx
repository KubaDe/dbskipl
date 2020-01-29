import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type TopbarWrapperProps = BaseBoxProps

export const TopbarWrapper: React.FC<TopbarWrapperProps> = styled(Box)<
  TopbarWrapperProps
>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  justify-content: stretch;
  display: flex;
  flex-direction: column;
  ${props =>
    css({
      borderBottom: 'primary',
      borderBottomWidth: 'normal',
    })}
`

export const TopbarContent: React.FC<BaseBoxProps> = styled(Box)<BaseBoxProps>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  flex-grow: 1;
  margin-bottom: 98px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export type MenuItemProps = BaseBoxProps

export const MenuItem: React.FC<MenuItemProps> = styled(Box)<MenuItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${css({
    my: 'sm',
  })}
`
