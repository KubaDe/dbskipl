import React from 'react'

import Flex, { FlexItem } from 'components/simpleUi/Flex'
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

export interface SidebarMenuRelatedProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  isInverted: boolean
  isPhoto: boolean
  isShort: boolean
}

export type SidebarMenuProps = SidebarMenuRelatedProps

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  setIsOpen,
  isInverted,
  isPhoto,
}) => {
  const topbarMenuButtonProps: MotionBasicButtonProps = {
    sizeVariant: 'xsmall',
    type: isInverted ? 'inverted' : 'primary',
  }

  return (
    <Topbar isOpen={isOpen} setIsOpen={setIsOpen} isInverted={isInverted}>
      <Flex alignItems="flex-start" justifyContent="space-between" mx="sm" my="sm">
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
            type={isInverted ? 'inverted' : 'primary'}
          />
        </SidebarButtonWrapper>
      </Flex>
      <TopbarContent>
        <FlexItem>
          {menuItems.map(item => (
            <BarMenuItem key={item.label}>
              <BasicButtonMotion {...topbarMenuButtonProps}>
                {item.label}
              </BasicButtonMotion>
            </BarMenuItem>
          ))}
        </FlexItem>
      </TopbarContent>
    </Topbar>
  )
}

export default SidebarMenu
