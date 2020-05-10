import React from 'react'
import { motion, AnimationProps, MotionProps, Variants, Transition } from 'framer-motion'

import Img from 'components/simpleUi/Img'
import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

import sideProfileSrc from './assets/sideProfile.png'

const variants: Variants = {
  before: {
    x: -200,
    rotate: '-20deg',
    opacity: 1,
  },
  active: {
    x: 0,
    rotate: '0deg',
    opacity: 1,
  },
  after: {
    x: 0,
    rotate: '0deg',
    opacity: 0,
  },
}

const transition: Transition = {
  mass: 2,
  type: 'spring'
}

interface ImageRelatedProps {}

export type MotionImageProps = AnimationProps &
  ImageRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionImage: React.FC<MotionImageProps> = motion.custom(Flex)

const Image: React.FC<MotionImageProps> = (props: MotionImageProps) => {
  const {} = props
  return (
    <MotionImage
      variants={variants}
      transition={transition}
      alignItems="center"
      justifyContent="center"
      flex="1 1"
      {...props}
    >
      <Img width="300px" src={sideProfileSrc} title="" />
    </MotionImage>
  )
}

export default Image
