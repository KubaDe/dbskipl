import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'
import { colors } from 'config/theme/colors'

import {
  SubTextRect as StyledSubTextRect,
  SubTextMask as StyledSubTextMask,
  SubTextMaskProps as StyledSubTextMaskProps,
  SubTextRectProps as StyledSubTextRectProps,
} from './SubText.styled'

const motionSubTextMaskVariants: Variants = {
  horizontal: {
    width: 'auto',
    opacity: 1,
  },
  vertical: {
    width: 0,
    opacity: 0,
  },
}

type MotionSubTextMaskProps = StyledSubTextMaskProps &
  AnimationProps &
  MotionProps

const MotionSubTextMask = motion.custom(StyledSubTextMask)
export const SubTextMask: React.FC<MotionSubTextMaskProps> = (
  props: MotionSubTextMaskProps,
) => {
  return <MotionSubTextMask {...props} />
}

const motionSubTextRectVariants: Variants = {
  primary: {
    backgroundColor: colors.transparentWhite,
    color: colors.black,
    borderColor: colors.black,
  },
  inverted: {
    backgroundColor: colors.transparentWhite,
    color: colors.inverted,
    borderColor: colors.inverted,
  },
  horizontal: ({ baseSize }) => ({
    width: `${baseSize * 2.5}px`,
    height: `${baseSize * 0.5}px`,
    fontSize: `${baseSize * 0.35}px`,
    transition: {
      when: 'beforeChildren',
      type: 'tween',
    },
  }),
  vertical: ({ baseSize }) => ({
    width: `${baseSize}px`,
    height: `${baseSize}px`,
    fontSize: `${baseSize * 0.66}px`,
    transition: {
      when: 'afterChildren',
      type: 'tween',
    },
  }),
}

type MotionSubTextRectProps = AnimationProps &
  MotionProps &
  StyledSubTextRectProps
const MotionSubTextRect = motion.custom(StyledSubTextRect)
export const SubTextRect: React.FC<MotionSubTextRectProps> = (
  props: MotionSubTextRectProps,
) => {
  const { baseSize } = props
  return (
    <MotionSubTextRect
      custom={{ baseSize }}
      variants={motionSubTextRectVariants}
      {...props}
    >
      J
      <SubTextMask variants={motionSubTextMaskVariants}>akub&nbsp;</SubTextMask>
      D<SubTextMask variants={motionSubTextMaskVariants}>ebski</SubTextMask>
    </MotionSubTextRect>
  )
}
