import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'
import { colors } from 'config/theme/colors'

import {
  TextRect as StyledTextRect,
  TextRectProps as StyledTextRectProps,
} from './Text.styled'

const motionTextRectVariants: Variants = {
  primary: {
    backgroundColor: colors.transparentWhite,
    color: colors.black,
    borderColor: colors.black,
  },
  inverted: {
    backgroundColor: colors.transparentBlack,
    color: colors.inverted,
    borderColor: colors.inverted,
  },
  horizontal: ({ baseSize }) => ({
    width: `${baseSize * 3}px`,
    transition: {
      type: 'tween',
    },
  }),
  vertical: () => ({
    width: 0,
    transition: {
      type: 'tween',
    },
  }),
}

type MotionTextRectProps = AnimationProps & MotionProps & StyledTextRectProps
const MotionTextRect = motion.custom(StyledTextRect)
export const TextRect: React.FC<MotionTextRectProps> = (
  props: MotionTextRectProps,
) => {
  const { baseSize } = props
  return (
    <MotionTextRect
      custom={{ baseSize }}
      variants={motionTextRectVariants}
      {...props}
    >
      DBSKI
    </MotionTextRect>
  )
}
