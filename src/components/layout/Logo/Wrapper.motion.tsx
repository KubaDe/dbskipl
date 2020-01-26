import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import {
  Wrapper as StyledWrapper,
  WrapperProps as StyledWrapperProps,
} from './Wrapper.styled'

const motionWrapperVariants: Variants = {
  primary: {},
  inverted: {},
  horizontal: ({ baseSize }) => ({
    maxWidth: `${baseSize * 4}px`,
    transition: {
      type: 'tween',
    },
  }),
  vertical: ({ baseSize }) => ({
    maxWidth: `${baseSize}px`,
    transition: {
      type: 'tween',
    },
  }),
}

type MotionWrapperProps = AnimationProps & MotionProps & StyledWrapperProps
const MotionWrapper = motion.custom(StyledWrapper)
export const Wrapper: React.FC<MotionWrapperProps> = (
  props: MotionWrapperProps,
) => {
  const { baseSize } = props
  return (
    <MotionWrapper
      custom={{ baseSize }}
      variants={motionWrapperVariants}
      {...props}
    />
  )
}
