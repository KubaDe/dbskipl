import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import StyledHeading, { HeadingProps } from 'components/typography/Heading'

const variants: Variants = {
  inactive: {
    x: -900,
  },
  active: {
    x: 0,
  },
}

const transition: Transition = {
  type: 'spring',
  duration: 1,
  delay: 1,
}

interface HeadingRelatedProps {}

export type MotionHeadingProps = AnimationProps &
  HeadingRelatedProps &
  HeadingProps &
  MotionProps

const MotionHeading: React.FC<MotionHeadingProps> = motion.custom(StyledHeading)

const Heading: React.FC<MotionHeadingProps> = (props: MotionHeadingProps) => {
  const {} = props
  return (
    <MotionHeading
      animate="active"
      initial="inactive"
      variants={variants}
      transition={transition}
      fontFamily="secondary"
      fontSize={{ _: 'h1', md: 'hero3', lg: 'hero2' }}
      textAlign={{_: 'center', md: 'left'}}
      my={{ _: 'md', md: 'xl', lg: '3xl' }}
      mb={{ _: 'md', md: 'md', lg: '3xl' }}
      color="inverted"
      as='h2'
      {...props}
    />
  )
}

export default Heading
