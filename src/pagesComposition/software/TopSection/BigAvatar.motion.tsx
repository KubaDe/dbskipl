import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Img, { BaseImgProps } from 'components/simpleUi/Img'

const variants: Variants = {
  active: {
    opacity: 1,
    x: 0,
  },
  inactive: {
    opacity: 0,
    x: -80,
  },
}

interface BigAvatarRelatedProps {}

export type MotionBigAvatarProps = AnimationProps &
  BigAvatarRelatedProps &
  BaseImgProps &
  MotionProps

const MotionBigAvatar: React.FC<MotionBigAvatarProps> = motion.custom(Img)

const BigAvatar: React.FC<MotionBigAvatarProps> = (
  props: MotionBigAvatarProps,
) => {
  return (
    <MotionBigAvatar
      initial="inactive"
      variants={variants}
      transition={{
        duration: 1,
        type: 'spring',
      }}
      {...props}
    />
  )
}

export default BigAvatar
