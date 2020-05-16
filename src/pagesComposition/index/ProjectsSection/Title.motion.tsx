import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Text, { BaseTextProps } from 'components/simpleUi/Text'

const variants: Variants = {
  before: {
    y: '-110%',
    transition: {
      duration: 0.2,
    },
  },
  active: ({ delay }) => ({
    y: 0,
    transition: {
      delay,
      duration: 0.6,
    },
  }),
  after: {},
}

interface TitleRelatedProps {
  delay: number
}

export type MotionTitleProps = AnimationProps &
  TitleRelatedProps &
  BaseTextProps &
  MotionProps

const MotionTitle: React.FC<MotionTitleProps> = motion.custom(Text)

const Title: React.FC<MotionTitleProps> = (props: MotionTitleProps) => {
  const { delay } = props
  return (
    <MotionTitle
      variants={variants}
      custom={{ delay }}
      as="span"
      display="block"
      {...props}
    />
  )
}

export default Title
