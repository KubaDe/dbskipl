import React, { useState } from 'react'

import SidebarMenu from 'components/layout/SidebarMenu'
import TopBar from 'components/layout/TopBar'

interface LayoutRelatedProps {
  children?: React.ReactNode
}

type LayoutProps = LayoutRelatedProps

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <SidebarMenu
        isPhoto={false}
        isInverted={false}
        isShort={false}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        wrapperProps={{
          invisible: '<md',
        }}
      />
      <TopBar
        isPhoto={false}
        isInverted={false}
        isShort={true}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        wrapperProps={{
          invisible: '>md',
        }}
      />
      {children}
    </>
  )
}

export default Layout
