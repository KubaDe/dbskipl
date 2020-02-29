import React from 'react'

import { motion, AnimationProps, MotionProps } from 'framer-motion'

import Heading, { HeadingProps } from 'components/typography/Heading'

interface HeadingRelatedProps {
  delayTime?: number
}

export type MotionHeadingProps = AnimationProps &
  HeadingRelatedProps &
  HeadingProps &
  MotionProps

const MotionBackgroundImage: React.FC<MotionHeadingProps> = motion.custom(
  Heading,
)

const BackgroundImage: React.FC<MotionHeadingProps> = (
  props: MotionHeadingProps,
) => {
  const { delayTime } = props
  return (
    <MotionBackgroundImage
      initial={{ opacity: 0, x: 130, scale: 1.3 }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 1,
          delay: delayTime,
        },
      }}
      {...props}
    />
  )
}

export default BackgroundImage
