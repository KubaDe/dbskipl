import React from 'react'
import { motion, AnimationProps, Variants, MotionProps } from 'framer-motion'

import BasicButton, { BasicButtonProps } from './BasicButton'

export type MotionBasicButtonProps = AnimationProps &
  MotionProps &
  BasicButtonProps

export const MotionBasicButton: React.FC<MotionBasicButtonProps> = motion.custom(
  BasicButton,
)
