import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

const variants: Variants = {
  before: {
    opacity: 0,
  },
  active: {
    opacity: 1,
  },
  after: {
    opacity: 1,
  },
}

interface WrapperRelatedProps {}

export type MotionWrapperProps = AnimationProps &
  WrapperRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionWrapper: React.FC<MotionWrapperProps> = motion.custom(Flex)

const Wrapper: React.FC<MotionWrapperProps> = (props: MotionWrapperProps) => {
  return (
    <MotionWrapper
      initial="inactive"
      variants={variants}
      maxWidth="1000px"
      flex="1 1"
      flexDirection={{ _: 'column', md: 'row' }}
      my={{_: 'xl', md: 0}}
      {...props}
    />
  )
}

export default Wrapper
