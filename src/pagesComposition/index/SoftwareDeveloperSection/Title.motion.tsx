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
    x: '-100vw',
  },
  active: {
    x: '0',
  },
}

const transition: Transition = {
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
      as="h1"
      fontSize={{ _: 'display4', md: 'display3', lg: 'display2' }}
      fontWeight={200}
      lineHeight="22px"
      flexDirection="column"
      justifyContent="center"
      alignItems={{ _: 'center', md: 'flex-end' }}
      pr={{ _: 0, md: 'lg', lg: '3xl' }}
      {...props}
    />
  )
}

export default Title
