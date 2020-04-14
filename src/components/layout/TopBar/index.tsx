import React from 'react'
import { useLockBodyScroll } from 'react-use'

import Flex, { FlexItem } from 'components/simpleUi/Flex'
import { BaseBoxProps } from 'components/simpleUi/Box'
import IconButton from 'components/buttons/IconButton'
import {
  BasicButtonMotion,
  MotionBasicButtonProps,
} from 'components/buttons/BasicButton'
import { MenuToggleIcon } from 'components/buttons/MenuToggleButton/MenuToggleIcon.motion'
import { SidebarButtonWrapper } from 'components/buttons/MenuToggleButton/MenuToggleButton.motion'
import Logo from 'components/layout/Logo'

import { BarMenuItem } from '../menu/MenuItems/MenuItems.motion'
import menuItems from '../menu/items'
import { Topbar } from './TopbarMenu.motion'
import { TopbarContent } from './TopbarMenu.styled'
import Link from 'next/link'

export interface SidebarMenuRelatedProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  isInverted: boolean
  isPhoto: boolean
  isShort: boolean
  wrapperProps?: BaseBoxProps
}

export type SidebarMenuProps = SidebarMenuRelatedProps

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  setIsOpen,
  isInverted,
  isPhoto,
  wrapperProps = {},
}) => {
  const topbarMenuButtonProps: MotionBasicButtonProps = {
    sizeVariant: 'small',
    px: '2xl',
    type: isInverted ? 'inverted' : 'primary',
  }

  useLockBodyScroll(isOpen)

  return (
    <Topbar
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isInverted={isInverted}
      {...wrapperProps}
    >
      <Flex
        alignItems="flex-start"
        justifyContent="space-between"
        mx="sm"
        my="sm"
      >
        <FlexItem>
          <Logo
            isInverted={isInverted}
            isVertical={false}
            isPhoto={isPhoto}
            isShort={!isOpen}
            baseSize={50}
          />
        </FlexItem>
        <SidebarButtonWrapper
          variants={{
            open_basic: {},
            closed_basic: {},
            open_inverted: {},
            closed_inverted: {},
          }}
        >
          <IconButton
            icon={<MenuToggleIcon isOpen={isOpen} />}
            onClick={() => setIsOpen(!isOpen)}
            type={isInverted || isOpen ? 'primary' : 'black'}
          />
        </SidebarButtonWrapper>
      </Flex>
      <TopbarContent>
        <FlexItem>
          {menuItems.map(item => (
            <BarMenuItem key={item.label}>
              <Link href={`/${item.href}`} passHref>
                <BasicButtonMotion {...topbarMenuButtonProps} as="a">
                  {item.label}
                </BasicButtonMotion>
              </Link>
            </BarMenuItem>
          ))}
        </FlexItem>
      </TopbarContent>
    </Topbar>
  )
}

export default SidebarMenu
