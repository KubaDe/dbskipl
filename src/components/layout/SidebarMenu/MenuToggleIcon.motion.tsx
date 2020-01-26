import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Wrapper = motion.span

interface MenuToggleIconProps {
  isOpen: boolean
}

export const MenuToggleIcon: React.FC<MenuToggleIconProps> = (
  props: MenuToggleIconProps,
) => {
  const { isOpen } = props
  const [isInit, setIsInit] = useState(true)
  useEffect(() => {
    setIsInit(false)
  }, [isOpen])
  return (
    <Wrapper
      initial={isInit ? false : { rotate: '-0.5turn' }}
      animate={{ rotate: '0turn' }}
      transition={{
        duration: 2,
      }}
      children={isOpen ? <FiX /> : <FiMenu />}
      key={+isOpen}
    />
  )
}
