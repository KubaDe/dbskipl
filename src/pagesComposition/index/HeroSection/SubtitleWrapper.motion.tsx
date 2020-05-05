import React from 'react'
import { motion, AnimationProps, MotionProps, Variants, Transition } from 'framer-motion';

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

const variants: Variants = {
  heroFull: {
    x: '130%',
  },
  heroCollapsed: {
    x: '0%',
  },
}

const transition: Transition = {
  duration: 0.5,
  delay: 0.1,
  type: 'tween',
}

interface SubtitleWrapperRelatedProps {}

export type MotionSubtitleWrapperProps = AnimationProps &
  SubtitleWrapperRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionSubtitleWrapper: React.FC<MotionSubtitleWrapperProps> = motion.custom(
  Flex,
)

const SubtitleWrapper: React.FC<MotionSubtitleWrapperProps> = (
  props: MotionSubtitleWrapperProps,
) => {
  const {} = props
  return (
    <MotionSubtitleWrapper
      initial="heroFull"
      variants={variants}
      transition={transition}
      pr="3xl"
      width="100%"
      alignItems="center"
      justifyContent="flex-end"
      overflow="hidden"
      fontSize={{ _: 'h4', md: 'h3', lg: 'display4', xl: 'display4' }}
      fontWeight={200}
      {...props}
    />
  )
}

export default SubtitleWrapper
