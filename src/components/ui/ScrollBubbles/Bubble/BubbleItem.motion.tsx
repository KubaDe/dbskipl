import React from 'react'

import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Heading, { HeadingProps } from 'components/typography/Heading'

const MotionBubbleItemVariants: Variants = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  closed: {
    y: -80,
    x: -30,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 1,
    },
  },
}

interface BubbleItemRelatedProps {}

export type MotionBubbleItemProps = AnimationProps &
  BubbleItemRelatedProps &
  HeadingProps &
  MotionProps

const MotionBubbleItem: React.FC<MotionBubbleItemProps> = motion.custom(Heading)

const BubbleItem: React.FC<MotionBubbleItemProps> = (
  props: MotionBubbleItemProps,
) => {
  return (
    <MotionBubbleItem
      color="inverted"
      zIndex={1}
      fontSize="h5"
      my="2xs"
      variants={MotionBubbleItemVariants}
      as="span"
      {...props}
    />
  )
}

export default BubbleItem
