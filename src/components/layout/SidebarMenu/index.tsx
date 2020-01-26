import React, { useState, useMemo } from 'react'

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
  // alignSelf: 'center',
  justifySelf: 'center',
  gridColumn: '1 / span 1',
  mt: 'lg',
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, setIsOpen }) => {
  const [isInverted, setIsInverted] = useState(false)
  const sidebarMenuButtonProps: MotionBasicButtonProps = useMemo(
    () => ({
      sizeVariant: 'xsmall',
      type: isInverted ? 'inverted' : 'primary',
    }),
    [isInverted],
  )

  return (
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isInverted={isInverted}>
      <SidebarContent>
        <Grid {...gridProps}>
          <GridItem {...gridMenuHeaderProps}>
            <Logo
              isInverted={isInverted}
              isVertical={!isOpen}
              isPhoto={isInverted}
            />
          </GridItem>
          <GridItem {...gridMenuItemsProps}>
            <SidebarMenuItem>
              <BasicButtonMotion
                {...sidebarMenuButtonProps}
                onClick={() => setIsInverted(!isInverted)}
              >
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
