import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const variants: Variants = {
  active: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
}

interface ContentRelatedProps {}

export type MotionContentProps = AnimationProps &
  ContentRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionContent: React.FC<MotionContentProps> = motion.custom(Box)

const Content: React.FC<MotionContentProps> = (props: MotionContentProps) => {
  const {} = props
  return <MotionContent variants={variants} {...props} />
}

export default Content
