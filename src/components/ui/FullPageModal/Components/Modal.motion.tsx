import React from 'react'
import { motion, AnimationProps, MotionProps } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

interface ModalRelatedProps {}

export type MotionModalProps = AnimationProps &
  ModalRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionModal: React.FC<MotionModalProps> = motion.custom(Box)

export default MotionModal
