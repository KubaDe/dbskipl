import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Img, { BaseImgProps } from 'components/simpleUi/Img'

import photographyAvatarSrc from './assets/photographyAvatar.png'
import photographyAvatarPreloadSrc from './assets/photographyAvatar-min.png'

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
      background="black"
      borderRadius="50%"
      backgroundImage={`url("${photographyAvatarPreloadSrc}")`}
      backgroundPosition="center"
      backgroundSize="100%"
      title="Jakub Dębski Photography"
      width={{ _: '65vw', md: '60vw', lg: '45vw' }}
      maxWidth="1000px"
      position="absolute"
      mx="auto"
      left="0"
      right="0"
      zIndex={2}
      {...props}
    />
  )
}

export default Avatar
