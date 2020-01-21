import React from 'react'
import { motion, AnimationProps, Variants, MotionProps } from 'framer-motion'
import { shadows } from 'config/theme/shadows'
import { colors } from 'config/theme/colors'
import { borders } from 'config/theme/borders'
import { BasicButtonProps, BasicButton } from './BasicButton'

export interface Type {
  type?: 'primary' | 'secondary' | 'none'
}

export type MotionBasicButtonProps = AnimationProps &
  MotionProps &
  BasicButtonProps &
  Type &
  {onClick?: (e: MouseEvent) => void}

const MotionBasicButtonComponent: React.FC<MotionBasicButtonProps> = motion.custom(
  BasicButton,
)

const variants: Variants = {
  primary: {
    backgroundColor: colors.inverted,
    border: borders.primary,
    color: colors.black,
  },
  secondary: {
    backgroundColor: colors.black,
    border: borders.primary,
    color: colors.inverted,
  },
  none: {
  },
}

export const MotionBasicButton: React.FC<MotionBasicButtonProps> = props => {
  const { type } = props
  return (
    <MotionBasicButtonComponent
      variants={variants}
      animate={type}
      whileHover={{
        boxShadow: shadows.primaries[400],
        x: '1px',
        y: '1px',
      }}
      whileTap={{
        boxShadow: shadows.primaries[200],
        x: '4px',
        y: '4px',
      }}
      {...props}
    />
  )
}

MotionBasicButton.defaultProps = {
  sizeVariant: 'normal',
  outline: false,
  type: 'primary',
}
