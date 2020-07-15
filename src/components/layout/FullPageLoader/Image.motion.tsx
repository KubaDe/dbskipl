import React from 'react'
import { motion, AnimationProps, MotionProps } from 'framer-motion'

import Img, { BaseImgProps } from 'components/simpleUi/Img'

interface ImageRelatedProps {}

export type MotionImageProps = AnimationProps &
  ImageRelatedProps &
  BaseImgProps &
  MotionProps

const MotionImage: React.FC<MotionImageProps> = motion.custom(Img)

const Image: React.FC<MotionImageProps> = (props: MotionImageProps) => {
  const {} = props
  return (
    <MotionImage
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 1.2 }}
      {...props}
    />
  )
}

export default Image
