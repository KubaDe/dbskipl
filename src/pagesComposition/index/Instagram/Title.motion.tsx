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
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.3,
    },
  },
  active: {
    opacity: 1,
  },
  after: {
    opacity: 0,
  },
}

const transition: Transition = {
  // delay: 1,
  duration: 1,
}

interface TitleRelatedProps {}

export type MotionTitleProps = AnimationProps &
  TitleRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionTitle: React.FC<MotionTitleProps> = motion.custom(Flex)

const Title: React.FC<MotionTitleProps> = (props: MotionTitleProps) => {
  const {} = props
  return (
    <MotionTitle
      variants={variants}
      transition={transition}
      initial="before"
      position="relative"
      alignItems="center"
      justifyContent="center"
      flexDirection='column'
      height='400px'
      {...props}
    />
  )
}

export default Title
