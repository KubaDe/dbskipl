import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Heading, { HeadingProps } from 'components/typography/Heading'

const variants: Variants = {
  inactive: {
    y: -100,
    opacity: 0,
  },
  active: {
    y: 0,
    opacity: 1,
  },
}

interface TitleRelatedProps {}

export type MotionTitleProps = AnimationProps &
  TitleRelatedProps &
  HeadingProps &
  MotionProps

const MotionTitle: React.FC<MotionTitleProps> = motion.custom(Heading)

const Title: React.FC<MotionTitleProps> = (props: MotionTitleProps) => {
  const {} = props
  return (
    <MotionTitle
      initial="inactive"
      transition={{
        duration: 1,
        type: 'spring'
      }}
      variants={variants}
      as="h1"
      fontFamily="secondary"
      width="100%"
      textAlign={{ _: 'center', md: 'left' }}
      fontSize={{ _: 'display2', md: 'hero2', lg: 'hero1' }}
      mb={{ _: 'lg', md: 'md' }}
      fontWeight={100}
      zIndex={2}
      {...props}
    />
  )
}

export default Title
