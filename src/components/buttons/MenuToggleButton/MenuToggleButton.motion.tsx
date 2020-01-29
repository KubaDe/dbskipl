import React from 'react'
import { motion, AnimationProps, Variants } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

interface SidebarButtonWrapperRelatedProps {
  variants: Variants
}

export type MotionButtonWrapperProps = AnimationProps & BaseBoxProps
export type SidebarButtonWrapperProps = MotionButtonWrapperProps &
  SidebarButtonWrapperRelatedProps

const MotionButtonWrapper: React.FC<MotionButtonWrapperProps> = motion.custom(
  Box,
)

export const SidebarButtonWrapper: React.FC<SidebarButtonWrapperProps> = (
  props: SidebarButtonWrapperProps,
) => {
  return <MotionButtonWrapper {...props} />
}
