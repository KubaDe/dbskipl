import React from 'react'
import { motion, AnimationProps, MotionProps } from 'framer-motion'

import { BasicButtonProps, BasicButton } from './BasicButton'
import { variants } from './BasicButtonInteractions.motion'

export interface Type {
  type?: 'primary' | 'secondary' | 'none' | 'inverted' | 'black'
}

export type MotionBasicButtonProps = AnimationProps &
  MotionProps &
  BasicButtonProps &
  Type & { onClick?: (e: MouseEvent) => void }

const MotionBasicButtonComponent: React.FC<MotionBasicButtonProps> = motion.custom(
  BasicButton,
)

export const BasicButtonMotion: React.FC<MotionBasicButtonProps> = props => {
  const { type } = props
  return (
    <MotionBasicButtonComponent
      variants={variants}
      animate={type}
      whileHover={`${type}_hover`}
      whileTap={`${type}_tap`}
      {...props}
    />
  )
}

BasicButtonMotion.defaultProps = {
  sizeVariant: 'normal',
  outline: false,
  type: 'primary',
}
