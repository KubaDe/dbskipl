import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const variants: Variants = {
  active: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  inactive: {
    opacity: 0,
    x: 130,
    scale: 1.3,
  },
}

interface HeadingRelatedProps {
  delayTime?: number
}

export type MotionHeadingProps = AnimationProps &
  HeadingRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionHeading: React.FC<MotionHeadingProps> = motion.custom(Box)

const Heading: React.FC<MotionHeadingProps> = (props: MotionHeadingProps) => {
  const { delayTime } = props
  return (
    <MotionHeading
      initial="inactive"
      transition={{
        delay: delayTime,
        type: 'spring',
        duration: 1.5,
      }}
      variants={variants}
      {...props}
    />
  )
}

export default Heading
