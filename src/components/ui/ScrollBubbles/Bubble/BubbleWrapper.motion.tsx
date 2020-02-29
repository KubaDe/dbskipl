import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const transition: Transition = {
  when: 'beforeChildren',
  duration: 1,
  damping: 100,
  mass: 5,
}

const variants: Variants = {
  normal: {
    scale: 1,
    y: 0,
    transition,
  },
  zoom: {
    scale: 1.45,
    y: -20,
    transition,
  },
}

interface BubbleWrapperRelatedProps {}

export type MotionBubbleWrapperProps = AnimationProps &
  BubbleWrapperRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionBubbleWrapper: React.FC<MotionBubbleWrapperProps> = motion.custom(
  Box,
)

const BubbleWrapper: React.FC<MotionBubbleWrapperProps> = (
  props: MotionBubbleWrapperProps,
) => {
  const {} = props
  return <MotionBubbleWrapper initial="normal" variants={variants} {...props} />
}

export default BubbleWrapper
