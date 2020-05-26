import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const variants: Variants = {
  before: {
    opacity: 0,
    scale: 1.3,
    transition: {
      delay: 0,
      duration: 0.3,
    },
  },
  active: {
    scale: 1,
    opacity: 1,
  },
  after: {
    scale: 1,
    opacity: 0,
  },
}

const transition: Transition = {
  delay: 1.5,
  duration: 1,
}

interface SubtitleRelatedProps {}

export type MotionSubtitleProps = AnimationProps &
  SubtitleRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionSubtitle: React.FC<MotionSubtitleProps> = motion.custom(Box)

const Subtitle: React.FC<MotionSubtitleProps> = (
  props: MotionSubtitleProps,
) => {
  const {} = props
  return (
    <MotionSubtitle
      transition={transition}
      initial="before"
      variants={variants}
      {...props}
    />
  )
}

export default Subtitle
