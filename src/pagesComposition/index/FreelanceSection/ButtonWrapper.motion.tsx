import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const variants: Variants = {
  inactive: {
    x: -200,
    opacity: 0,
  },
  active: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      type: 'spring',
    },
  },
}

interface ButtonWrapperRelatedProps {}

export type MotionButtonWrapperProps = AnimationProps &
  ButtonWrapperRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionButtonWrapper: React.FC<MotionButtonWrapperProps> = motion.custom(
  Box,
)

const ButtonWrapper: React.FC<MotionButtonWrapperProps> = (
  props: MotionButtonWrapperProps,
) => {
  const {} = props
  return (
    <MotionButtonWrapper
      initial="inactive"
      variants={variants}
      width={{ _: '100%', md: 'auto' }}
      {...props}
    />
  )
}

export default ButtonWrapper
