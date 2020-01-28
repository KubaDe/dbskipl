import React from 'react'

import Grid, { GridItem } from 'components/simpleUi/Grid'
import IconButton from 'components/buttons/IconButton'
import {
  BasicButtonMotion,
  MotionBasicButtonProps,
} from 'components/buttons/BasicButton'
import Logo from 'components/layout/Logo'

import { Sidebar } from './SidebarMenu.motion'
import { SidebarMenuItem } from './MenuItems.motion'
import { SidebarButtonWrapper } from './MenuToggleButton.motion'
import { MenuToggleIcon } from './MenuToggleIcon.motion'
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
            <SidebarMenuItem>
              <BasicButtonMotion {...sidebarMenuButtonProps}>
                Software
              </BasicButtonMotion>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <BasicButtonMotion {...sidebarMenuButtonProps}>
                Photography
              </BasicButtonMotion>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <BasicButtonMotion {...sidebarMenuButtonProps}>
                About me
              </BasicButtonMotion>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <BasicButtonMotion {...sidebarMenuButtonProps}>
                Contact
              </BasicButtonMotion>
            </SidebarMenuItem>
          </GridItem>
        </Grid>
        <SidebarButtonWrapper position="absolute" bottom="lg">
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
