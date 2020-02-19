import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

const variants: Variants = {
  empty: {
    scale: .1,
    transition: {
      duration: 1,
      type: 'spring',
      when: 'beforeChildren'
    },
  },
  base: {
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring',
      when: 'beforeChildren'
    },
  },
}

interface BigBubbleRelatedProps {}

export type MotionBigBubbleProps = AnimationProps &
  BigBubbleRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionBigBubble: React.FC<MotionBigBubbleProps> = motion.custom(Flex)

const BigBubble: React.FC<MotionBigBubbleProps> = (
  props: MotionBigBubbleProps,
) => {
  const {} = props
  return <MotionBigBubble initial="empty" variants={variants} {...props} />
}

export default BigBubble
