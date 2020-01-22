import React from 'react'
import { motion, AnimationProps, Variants, MotionProps } from 'framer-motion'

import {
  SidebarWrapper,
  SidebarWrapperProps,
  MenuItem,
  MenuItemProps,
  ButtonWrapper,
  ButtonWrapperProps,
} from './SidebarMenu.styled'

interface SidebarRelatedProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

type SidebarProps = AnimationProps &
  MotionProps &
  SidebarWrapperProps &
  SidebarRelatedProps

type MotionSidebarWrapperProps = SidebarProps

const MotionSidebarWrapper: React.FC<MotionSidebarWrapperProps> = motion.custom(
  SidebarWrapper,
)

const sidebarVariants: Variants = {
  open: {
    width: '246px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.05,
    },
  },
  closed: {
    width: '88px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    transition: {
      when: 'afterChildren',
    },
  },
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { isOpen } = props
  return (
    <MotionSidebarWrapper
      animate={isOpen ? 'open' : 'closed'}
      initial="closed"
      variants={sidebarVariants}
      {...props}
    />
  )
}

const sidebarMenuItemsVariants: Variants = {
  open: { opacity: 1, y: 10 },
  closed: { opacity: 0, y: 0 },
}

interface SidebarMenuItemRelatedProps {}

type SidebarMenuItemProps = AnimationProps & SidebarMenuItemRelatedProps

const MotionMenuItem: React.FC<SidebarMenuItemProps> = motion.custom(MenuItem)

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = (
  props: SidebarMenuItemProps,
) => {
  return <MotionMenuItem variants={sidebarMenuItemsVariants} {...props} />
}

const sidebarButtonWrapperVariants: Variants = {
  open: { right: '100px' },
  closed: { right: '-25px' },
}

type SidebarButtonWrapperProps = AnimationProps & ButtonWrapperProps

const MotionButtonWrapper: React.FC<SidebarButtonWrapperProps> = motion.custom(
  ButtonWrapper,
)

export const SidebarButtonWrapper: React.FC<SidebarButtonWrapperProps> = (
  props: SidebarButtonWrapperProps,
) => {
  return (
    <MotionButtonWrapper variants={sidebarButtonWrapperVariants} {...props} />
  )
}
