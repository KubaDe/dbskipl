import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import { BaseImgProps } from 'components/simpleUi/Img'
import StyledInstagramItemPhoto from './InstagramItemPhoto.styled'

const variants: Variants = {
}

interface InstagramItemPhotoRelatedProps {}

export type MotionInstagramItemPhotoProps = AnimationProps &
  InstagramItemPhotoRelatedProps &
  BaseImgProps &
  MotionProps

const MotionInstagramItemPhoto: React.FC<MotionInstagramItemPhotoProps> = motion.custom(
  StyledInstagramItemPhoto,
)

const InstagramItemPhoto: React.FC<MotionInstagramItemPhotoProps> = (
  props: MotionInstagramItemPhotoProps,
) => {
  const {} = props
  return (
    <MotionInstagramItemPhoto
      animate={''}
      initial=""
      variants={variants}
      overflow="hidden"
      width="100%"
      height="100%"
      {...props}
    />
  )
}

export default InstagramItemPhoto
