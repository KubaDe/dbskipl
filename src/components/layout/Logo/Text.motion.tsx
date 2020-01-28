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
  long_horizontal: ({ baseSize }) => ({
    width: `${baseSize * 3}px`,
    transition: {
      type: 'tween',
    },
  }),
  long_vertical: () => ({
    width: 0,
    paddingLeft: 0,
    color: colors.transparentBlack,
    marginLeft: '-2px',
    transition: {
      type: 'tween',
    },
  }),
  short_horizontal: ({ baseSize }) => ({
    width: `${baseSize}px`,
    paddingLeft: '4px',
    transition: {
      type: 'tween',
    },
  }),
  short_vertical: () => ({
    width: 0,
    paddingLeft: 0,
    color: colors.transparentBlack,
    marginLeft: '-2px',
    transition: {
      type: 'tween',
    },
  }),
}

interface MotionTextRectRelatedProps {
  isShort: boolean
}

type MotionTextRectProps = AnimationProps &
  MotionProps &
  StyledTextRectProps &
  MotionTextRectRelatedProps
const MotionTextRect = motion.custom(StyledTextRect)
export const TextRect: React.FC<MotionTextRectProps> = (
  props: MotionTextRectProps,
) => {
  const { baseSize, isShort = false } = props
  return (
    <MotionTextRect
      custom={{ baseSize }}
      variants={motionTextRectVariants}
      {...props}
    >
      {isShort ? ' JD' : 'DBSKI'}
    </MotionTextRect>
  )
}
