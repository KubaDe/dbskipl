import React from 'react'
import { motion, AnimationProps, Variants } from 'framer-motion'

import { ButtonWrapper, ButtonWrapperProps } from './SidebarMenu.styled'

const sidebarButtonWrapperVariants: Variants = {
  open_basic: { right: '100px' },
  closed_basic: { right: '-25px' },
  open_inverted: { right: '100px' },
  closed_inverted: { right: '-25px' },
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
