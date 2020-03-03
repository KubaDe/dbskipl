import React from 'react'

import SidebarMenu from 'components/layout/SidebarMenu'
import TopBar from 'components/layout/TopBar'

import {
  useMenuBarControllerLogic,
  MenuBarControllerContext,
} from './menuBarController'

interface LayoutRelatedProps {
  children?: React.ReactNode
}

type LayoutProps = LayoutRelatedProps

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props
  const menuBarController = useMenuBarControllerLogic()
  const { isInverted, isOpen, setIsOpen } = menuBarController

  return (
    <MenuBarControllerContext.Provider value={menuBarController}>
      <SidebarMenu
        isPhoto={false}
        isInverted={isInverted}
        isShort={false}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        wrapperProps={{
          invisible: '<md',
        }}
      />
      <TopBar
        isPhoto={false}
        isInverted={isInverted}
        isShort={true}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        wrapperProps={{
          invisible: '>md',
        }}
      />
      {children}
    </MenuBarControllerContext.Provider>
  )
}

export default Layout
