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
  before: {},
  active: {},
  after: {},
}

const transition: Transition = {
  staggerChildren: 0.5,
  delayChildren: 0,
}

interface ContentRelatedProps {}

export type MotionContentProps = AnimationProps &
  ContentRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionContent: React.FC<MotionContentProps> = motion.custom(Flex)

const Content: React.FC<MotionContentProps> = (props: MotionContentProps) => {
  return (
    <MotionContent
      variants={variants}
      transition={transition}
      flex="1 1"
      alignItems={{ _: 'center', md: 'flex-start' }}
      justifyContent="center"
      flexDirection="column"
      fontFamily="secondary"
      fontSize={{ _: 'display3', md: 'display1' }}
      lineHeight="1.1em"
      py={{ _: 'xl', md: 0 }}
      {...props}
    />
  )
}

export default Content
