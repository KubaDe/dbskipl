import React from 'react'

import { motion, AnimationProps, MotionProps } from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

interface BubbleItemWrapperRelatedProps {
  isOpen: boolean
}

export type MotionBubbleItemWrapperProps = AnimationProps &
  BubbleItemWrapperRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionBubbleItemWrapper: React.FC<MotionBubbleItemWrapperProps> = motion.custom(
  Flex,
)

const BubbleItemWrapper: React.FC<MotionBubbleItemWrapperProps> = (
  props: MotionBubbleItemWrapperProps,
) => {
  const { isOpen } = props
  return (
    <MotionBubbleItemWrapper
      animate={isOpen ? 'open' : 'closed'}
      initial="closed"
      width="137px"
      height="137px"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      bottom="0"
      right={0}
      flexDirection="column"
      {...props}
    />
  )
}

export default BubbleItemWrapper
