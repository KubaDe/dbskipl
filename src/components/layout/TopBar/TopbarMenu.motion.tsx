import React, { RefAttributes } from 'react'
import { motion, AnimationProps, Variants, MotionProps } from 'framer-motion'

import { TopbarWrapper, TopbarWrapperProps } from './TopbarMenu.styled'
import { colors } from '../../../config/theme/colors'

interface TopbarRelatedProps {
  isOpen: boolean
  isInverted: boolean
  setIsOpen: (isOpen: boolean) => void
}

type TopbarProps = AnimationProps &
  MotionProps &
  TopbarWrapperProps &
  TopbarRelatedProps

type MotionTopbarWrapperProps = TopbarProps & RefAttributes<Element>

const MotionTopbarWrapper: React.FC<MotionTopbarWrapperProps> = motion.custom(
  TopbarWrapper,
)

const openBase = {
  height: 'calc(100vh - 2px)',
  transition: {
    delayChildren: 0.4,
    staggerChildren: 0.05,
    type: 'tween',
  },
}
const closeBase = {
  height: '76px',
  transition: {
    when: 'afterChildren',
    staggerChildren: 0.05,
    type: 'tween',
  },
}

const sidebarVariants: Variants = {
  open_basic: {
    ...openBase,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderBottomColor: colors.black,
  },
  closed_basic: {
    ...closeBase,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderBottomColor: colors.black,
  },
  open_inverted: {
    ...openBase,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderBottomColor: colors.inverted,
  },
  closed_inverted: {
    ...closeBase,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderBottomColor: colors.inverted,
  },
}

export const Topbar: React.FC<TopbarProps> = (props: TopbarProps) => {
  const { isOpen, isInverted } = props

  const variant = `${isOpen ? 'open' : 'closed'}_${
    isInverted ? 'inverted' : 'basic'
  }`
  return (
    <MotionTopbarWrapper
      animate={variant}
      initial={variant}
      variants={sidebarVariants}
      {...props}
    />
  )
}
