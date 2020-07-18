import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

const variants: Variants = {
  before: {
    x: '100%',
  },
  active: {
    x: 0,
  },
  after: {
    x: 0,
  },
}

const transition: Transition = {
  duration: 1,
}

interface DescriptionWrapperRelatedProps {}

export type MotionDescriptionWrapperProps = AnimationProps &
  DescriptionWrapperRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionDescriptionWrapper: React.FC<MotionDescriptionWrapperProps> = motion.custom(
  Flex,
)

const DescriptionWrapper: React.FC<MotionDescriptionWrapperProps> = (
  props: MotionDescriptionWrapperProps,
) => {
  const {} = props
  return (
    <MotionDescriptionWrapper
      initial="before"
      variants={variants}
      transition={transition}
      flex={{md: "1 1"}}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="black"
      height='auto'
      px="3xl"
      py="3xl"
      position='relative'
      {...props}
    />
  )
}

export default DescriptionWrapper
