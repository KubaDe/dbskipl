import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition
} from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

const variants: Variants = {
  heroFull: {
    y: 150,
    opacity: 0,
  },
  heroCollapsed: {
    y: 0,
    opacity: 1,
  },
}

const transition: Transition = {
    duration: 1.5,
    type: 'spring',
}

interface TitleWrapperRelatedProps {}

export type MotionTitleWrapperProps = AnimationProps &
  TitleWrapperRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionTitleWrapper: React.FC<MotionTitleWrapperProps> = motion.custom(
  Flex,
)

const TitleWrapper: React.FC<MotionTitleWrapperProps> = (
  props: MotionTitleWrapperProps,
) => {
  const {} = props
  return (
    <MotionTitleWrapper
      initial="heroFull"
      variants={variants}
      transition={transition}
      width="100%"
      alignItems='center'
      justifyContent="center"
      overflow='hidden'
      my="2xl"
      fontSize={{
        _: 'h2',
        md: 'display3',
        lg: 'display2',
        xl: 'display1',
      }}
      fontWeight={200}
      flexDirection={{_: 'column', md: 'row'}}
      {...props}
    />
  )
}

export default TitleWrapper
