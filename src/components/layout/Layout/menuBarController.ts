import { useState, createContext, useContext } from 'react'

interface MenuBarController {
  isInverted: boolean
  setIsInverted: (value: boolean) => void
  setIsInvertedTrue: () => void
  setIsInvertedFalse: () => void
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const MenuBarControllerContext = createContext<MenuBarController>({
  isInverted: false,
  setIsInverted: () => {},
  setIsInvertedTrue: () => {},
  setIsInvertedFalse: () => {},
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
    setIsInvertedTrue: () => setIsInverted(true),
    setIsInvertedFalse: () => setIsInverted(false),
    isOpen,
    setIsOpen,
  }
}
