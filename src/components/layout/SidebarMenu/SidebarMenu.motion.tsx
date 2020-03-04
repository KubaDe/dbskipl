import React, { useRef, RefAttributes } from 'react'
import get from 'lodash/get'
import { motion, AnimationProps, Variants, MotionProps } from 'framer-motion'

import useOutsideClick from 'hooks/useOutsideClick'
import { SidebarWrapper, SidebarWrapperProps } from './SidebarMenu.styled'

import { colors } from 'config/theme/colors'

interface SidebarRelatedProps {
  isOpen: boolean
  isInverted: boolean
  setIsOpen: (isOpen: boolean) => void
}

type SidebarProps = AnimationProps &
  MotionProps &
  SidebarWrapperProps &
  SidebarRelatedProps

type MotionSidebarWrapperProps = SidebarProps & RefAttributes<Element>

const MotionSidebarWrapper: React.FC<MotionSidebarWrapperProps> = motion.custom(
  SidebarWrapper,
)

const openBase = {
  width: '246px',

  transition: {
    delayChildren: 0.4,
    staggerChildren: 0.05,
  },
}
const closeBase = {
  width: '88px',
  transition: {
    when: 'afterChildren',
    staggerChildren: 0.05,
  },
}

const sidebarVariants: Variants = {
  open_basic: {
    ...openBase,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRightColor: colors.black,
  },
  closed_basic: {
    ...closeBase,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRightColor: colors.black,
  },
  open_inverted: {
    ...openBase,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderRightColor: colors.inverted,
  },
  closed_inverted: {
    ...closeBase,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRightColor: colors.inverted,
  },
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { isOpen, isInverted, setIsOpen } = props
  const ref = useRef(null)
  useOutsideClick(ref, () => {
    isOpen && get(ref, 'current.offsetWidth') && setIsOpen(false)
  })
  const variant = `${isOpen ? 'open' : 'closed'}_${
    isInverted ? 'inverted' : 'basic'
  }`
  return (
    <MotionSidebarWrapper
      ref={ref}
      animate={variant}
      initial={variant}
      variants={sidebarVariants}
      {...props}
    />
  )
}
