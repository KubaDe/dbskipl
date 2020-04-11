import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Img, { BaseImgProps } from 'components/simpleUi/Img'

const variants: Variants = {
  inactive: {
    y: -200,
    opacity: 0,
    rotate: '30deg',
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
  active: {
    y: 0,
    opacity: 1,
    rotate: '0deg',
    transition: {
      type: 'spring',
      duration: 5,
      mass: 3,
      velocity: 4,
    },
  },
}

interface ImageRelatedProps {}

export type MotionImageProps = AnimationProps &
  ImageRelatedProps &
  BaseImgProps &
  MotionProps

const MotionImage: React.FC<MotionImageProps> = motion.custom(Img)

const Image: React.FC<MotionImageProps> = (props: MotionImageProps) => {
  return <MotionImage initial="inactive" variants={variants} {...props} />
}

export default Image
