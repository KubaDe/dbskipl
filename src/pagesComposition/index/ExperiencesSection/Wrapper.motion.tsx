import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'
import { colors } from 'config/theme/colors'

const transitionMobile: Transition = {
  duration: 1,
  when: 'beforeChildren',
}

const variants: Variants = {
  before: {
    backgroundColor: colors.inverted,
    opacity: 1,
  },
  active: {
    backgroundColor: colors.primary,
    opacity: 1,
  },
  after: {
    backgroundColor: colors.inverted,
    opacity: 1,
  },
  mobileNotActive: {
    opacity: 0,
    backgroundColor: colors.inverted,
    transition: transitionMobile,
  },
  mobileActive: {
    backgroundColor: colors.primary,
    opacity: 1,
    transition: transitionMobile,
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
      alignItems={{ md: 'center', _: 'start' }}
      justifyContent="center"
      mt={{ md: 0, _: 'tbar' }}
      flexWrap={{ md: 'nowrap', _: 'wrap' }}
      {...props}
    />
  )
}

export default Wrapper
