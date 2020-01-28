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
  long_horizontal: {
    width: 'auto',
    opacity: 1,
  },
  long_vertical: {
    width: 0,
    opacity: 0,
  },
  short_vertical: {
    width: 0,
    opacity: 0,
  },
  short_horizontal: {
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
  long_horizontal: ({ baseSize }) => ({
    width: `${baseSize * 2.5}px`,
    height: `${baseSize * 0.5}px`,
    fontSize: `${baseSize * 0.35}px`,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      type: 'tween',
    },
  }),
  long_vertical: ({ baseSize }) => ({
    width: `${baseSize}px`,
    height: `${baseSize}px`,
    fontSize: `${baseSize * 0.6}px`,
    opacity: 1,
    transition: {
      when: 'afterChildren',
      type: 'tween',
    },
  }),
  short_horizontal: ({ baseSize }) => ({
    width: `${baseSize}px`,
    height: 0,
    fontSize: `${baseSize * 0.6}px`,
    opacity: 0,
    transition: {
      when: 'beforeChildren',
      type: 'tween',
    },
  }),
  short_vertical: ({ baseSize }) => ({
    width: `${baseSize}px`,
    height: `${baseSize}px`,
    fontSize: `${baseSize * 0.6}px`,
    opacity: 1,
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
