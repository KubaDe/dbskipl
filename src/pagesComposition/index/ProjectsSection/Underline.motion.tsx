import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const variants: Variants = {
  before: {
    width: '0%',
    transition: {
      duration: 0.2,
    },
  },
  active: {
    width: '40%',
    transition: {
      delay: 1.5,
      duration: 0.8,
    },
  },
  after: {},
}

interface UnderlineRelatedProps {}

export type MotionUnderlineProps = AnimationProps &
  UnderlineRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionUnderline: React.FC<MotionUnderlineProps> = motion.custom(Box)

const Underline: React.FC<MotionUnderlineProps> = (
  props: MotionUnderlineProps,
) => {
  const {} = props
  return (
    <MotionUnderline
      initial="before"
      variants={variants}
      as="span"
      display="block"
      borderTop="primary"
      mt={{ _: 'lg', md: 'md' }}
      {...props}
    />
  )
}

export default Underline
