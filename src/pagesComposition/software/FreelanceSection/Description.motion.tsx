import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Text, { BaseTextProps } from 'components/simpleUi/Text'

const variants: Variants = {
  inactive: {
    y: '100px',
    opacity: 0,
  },
  active: {
    y: 0,
    opacity: 1,
  },
}

interface DescriptionRelatedProps {}

export type MotionDescriptionProps = AnimationProps &
  DescriptionRelatedProps &
  BaseTextProps &
  MotionProps

const MotionDescription: React.FC<MotionDescriptionProps> = motion.custom(Text)

const Description: React.FC<MotionDescriptionProps> = (
  props: MotionDescriptionProps,
) => {
  return (
    <MotionDescription
      initial="inactive"
      variants={variants}
      transition={{
        duration: 1,
        type: 'spring',
      }}
      textAlign={{ _: 'center', md: 'left' }}
      lineHeight="1.1em"
      fontSize={{ _: 'h3', md: 'h2', lg: 'display4' }}
      fontWeight={100}
      zIndex={2}
      overflow="hidden"
      mb="2xl"
      {...props}
    />
  )
}

export default Description
