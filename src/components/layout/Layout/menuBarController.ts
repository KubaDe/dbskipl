import { useState, createContext, useContext } from 'react'

interface MenuBarController {
  isInverted: boolean
  setIsInverted: (value: boolean) => void
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const MenuBarControllerContext = createContext<MenuBarController>({
  isInverted: false,
  setIsInverted: () => {},
  isOpen: false,
  setIsOpen: () => {},
})

export const useMenuBarController = () => useContext(MenuBarControllerContext)

export const useMenuBarControllerLogic = (): MenuBarController => {
  const [isInverted, setIsInverted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return {
    isInverted,
    setIsInverted,
    isOpen,
    setIsOpen,
  }
}
