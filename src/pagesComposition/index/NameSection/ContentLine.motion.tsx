import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const variants: Variants = {
  before: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.1,
    },
  },
  active: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
  after: {
    opacity: 0,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
}

interface ContentLineRelatedProps {}

export type MotionContentLineProps = AnimationProps &
  ContentLineRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionContentLine: React.FC<MotionContentLineProps> = motion.custom(Box)

const ContentLine: React.FC<MotionContentLineProps> = (
  props: MotionContentLineProps,
) => {
  const {} = props
  return (
    <MotionContentLine
      variants={variants}
      as="span"
      display="block"
      {...props}
    />
  )
}

export default ContentLine
