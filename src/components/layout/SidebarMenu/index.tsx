import React from 'react'

import Grid, { GridItem } from 'components/simpleUi/Grid'
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
import { Sidebar } from './SidebarMenu.motion'
import { SidebarContent } from './SidebarMenu.styled'

export interface SidebarMenuRelatedProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  isInverted: boolean
  isPhoto: boolean
  isShort: boolean
}

export type SidebarMenuProps = SidebarMenuRelatedProps

const gridProps = {
  gridTemplateColumns: '100%',
  gridTemplateRows: '100px 1fr 40px',
  gridTemplateAreas: `
        "top"
        "middle"
        "bottom"
        `,
  height: '100%',
  width: '100%',
}

const gridMenuItemsProps = {
  gridRow: 'top / bottom',
  alignSelf: 'center',
  justifySelf: 'center',
  gridColumn: '1 / span 1',
}

const gridMenuHeaderProps = {
  gridRow: 'top / span 1',
  justifySelf: 'left',
  gridColumn: '1 / span 1',
  mt: 'lg',
  ml: 'md',
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  setIsOpen,
  isInverted,
  isPhoto,
  isShort,
}) => {
  const sidebarMenuButtonProps: MotionBasicButtonProps = {
    sizeVariant: 'xsmall',
    type: isInverted ? 'inverted' : 'primary',
  }

  return (
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isInverted={isInverted}>
      <SidebarContent>
        <Grid {...gridProps}>
          <GridItem {...gridMenuHeaderProps}>
            <Logo
              isInverted={isInverted}
              isVertical={!isOpen}
              isPhoto={isPhoto}
              isShort={isShort}
            />
          </GridItem>
          <GridItem {...gridMenuItemsProps}>
            {menuItems.map(item => (
              <BarMenuItem key={item.label}>
                <BasicButtonMotion {...sidebarMenuButtonProps}>
                  {item.label}
                </BasicButtonMotion>
              </BarMenuItem>
            ))}
          </GridItem>
        </Grid>
        <SidebarButtonWrapper
          position="absolute"
          bottom="lg"
          variants={{
            open_basic: { right: '100px' },
            closed_basic: { right: '-25px' },
            open_inverted: { right: '100px' },
            closed_inverted: { right: '-25px' },
          }}
        >
          <IconButton
            icon={<MenuToggleIcon isOpen={isOpen} />}
            onClick={() => setIsOpen(!isOpen)}
            type={isInverted ? 'inverted' : 'primary'}
          />
        </SidebarButtonWrapper>
      </SidebarContent>
    </Sidebar>
  )
}

export default SidebarMenu
