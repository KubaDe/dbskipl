import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'
import backgroundStripesSrc from './assets/backgroundStripes.png'

const variants: Variants = {
  whileHover: {
    x: '-6px',
    y: '-6px',
  },
  whileTap: {
    x: '-8px',
    y: '-8px',
  },
  active: {
    x: 0,
    y: 0,
  },
}

interface InstagramItemShadowRelatedProps {}

export type MotionInstagramItemShadowProps = AnimationProps &
  InstagramItemShadowRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionInstagramItemShadow: React.FC<MotionInstagramItemShadowProps> = motion.custom(
  Box,
)

const InstagramItemShadow: React.FC<MotionInstagramItemShadowProps> = (
  props: MotionInstagramItemShadowProps,
) => {
  const {} = props
  return (
    <MotionInstagramItemShadow
      initial="active"
      variants={variants}
      position="absolute"
      background={`url("${backgroundStripesSrc}")`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      top="sm"
      left="sm"
      width="100%"
      height="100%"
      zIndex={1}
      {...props}
    />
  )
}

export default InstagramItemShadow
