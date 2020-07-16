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
  active: {
    width: 'calc(50vw + 44px)',
  },
  inactive: {
    width: '86px',
  },
}

const transition: Transition = {
  duration: 1,
}

interface HalfCoverRelatedProps {}

export type MotionHalfCoverProps = AnimationProps &
  HalfCoverRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionHalfCover: React.FC<MotionHalfCoverProps> = motion.custom(Box)

const HalfCover: React.FC<MotionHalfCoverProps> = (
  props: MotionHalfCoverProps,
) => {
  const {} = props
  return (
    <MotionHalfCover
      animate="active"
      initial="active"
      transition={transition}
      variants={variants}
      background="black"
      position="absolute"
      top={0}
      left={{ _: '-44px', md: 0 }}
      height="100%"
      {...props}
    />
  )
}

export default HalfCover
