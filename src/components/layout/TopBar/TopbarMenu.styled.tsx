import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type TopbarWrapperProps = BaseBoxProps

export const TopbarWrapper: React.FC<TopbarWrapperProps> = styled(Box)<
  TopbarWrapperProps
>`
  position: fixed;
  z-index: 100;
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

interface TopbarContentRelatedProps {
  isOpen: boolean
}
type TopbarContentProps = BaseBoxProps & TopbarContentRelatedProps
export const TopbarContent: React.FC<TopbarContentProps> = styled(Box)<
  TopbarContentProps
>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  flex-grow: 1;
  margin-bottom: 98px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    !props.isOpen &&
    css`
      pointer-events: none;
    `}
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
