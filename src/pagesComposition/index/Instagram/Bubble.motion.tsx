import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Img, { BaseImgProps } from 'components/simpleUi/Img'

import photographyAvatarSrc from './assets/instagramPattern.png'

const variants: Variants = {
  before: {
    scale: 0.8,
  },
  active: {
    scale: 1,
  },
  after: {
    scale: 1,
  },
}

const transition: Transition = {
  duration: 1,
}

interface AvatarRelatedProps {}

export type MotionAvatarProps = AnimationProps &
  AvatarRelatedProps &
  BaseImgProps &
  MotionProps

const MotionAvatar: React.FC<MotionAvatarProps> = motion.custom(Img)

type AvatarProps = Omit<MotionAvatarProps, 'title' | 'src'>

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const {} = props
  return (
    <MotionAvatar
      transition={transition}
      initial="before"
      variants={variants}
      src={photographyAvatarSrc}
      title="pattern"
      position="absolute"
      top="0"
      height='100%'
      zIndex={1}
      {...props}
    />
  )
}

export default Avatar
