import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

const transition: Transition = {
  duration: 0.5,
}

const variants: Variants = {
  before: {
    y: '100vh',
  },
  active: {
    y: 0,
  },
  after: {
    y: '-100vh',
  },
}

interface FloatingRelatedProps {}

export type MotionFloatingProps = AnimationProps &
  FloatingRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionFloating: React.FC<MotionFloatingProps> = motion.custom(Flex)

const Floating: React.FC<MotionFloatingProps> = (
  props: MotionFloatingProps,
) => {
  const {} = props
  return (
    <MotionFloating
      variants={variants}
      position="fixed"
      transition={transition}
      zIndex={3}
      top={0}
      left={0}
      mt={{ _: '76px', md: 0 }}
      ml={{ _: 0, md: '86px' }}
      width={{ _: '100%', md: 'calc(100% - 86px)' }}
      height="100vh"
      flexDirection="row"
      alignItems="flex-end"
      justifyContent="center"
      {...props}
    />
  )
}

export default Floating
