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
  whileHover: {
    left: '130%',
  },
  shine: {
    opacity: 0.8,
    rotate: '30deg',
    left: '-50%',
  },
}

const transition: Transition = {
  duration: 0.4,
}

interface ShineRelatedProps {}

export type MotionShineProps = AnimationProps &
  ShineRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionShine: React.FC<MotionShineProps> = motion.custom(Box)

const Shine: React.FC<MotionShineProps> = (props: MotionShineProps) => {
  const {} = props
  return (
    <MotionShine
      initial="shine"
      variants={variants}
      transition={transition}
      position="absolute"
      backgroundColor="inverted"
      top={'-30%'}
      width="70px"
      height="150%"
      {...props}
    />
  )
}

export default Shine
