import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'
import { colors } from 'config/theme/colors'

const variants: Variants = {
  before: {
    backgroundColor: colors.inverted,
  },
  active: {
    backgroundColor: colors.primary,
  },
  after: {
    backgroundColor: colors.inverted,
  },
}

interface WrapperRelatedProps {}

export type MotionWrapperProps = AnimationProps &
  WrapperRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionWrapper: React.FC<MotionWrapperProps> = motion.custom(Flex)

const Wrapper: React.FC<MotionWrapperProps> = (props: MotionWrapperProps) => {
  const {} = props
  return (
    <MotionWrapper
      initial="before"
      variants={variants}
      alignItems="center"
      justifyContent="center"
      height="300vh"
      {...props}
    />
  )
}

export default Wrapper
