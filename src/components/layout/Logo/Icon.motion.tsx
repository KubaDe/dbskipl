import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'
import { colors } from 'config/theme/colors'

import {
  Icon as StyledIcon,
  IconRect as StyledIconRect,
  IconRectProps as StyledIconRectProps,
} from './Icon.styled'

import codeLogoSrc from './assets/CodeLogo.svg'
import photoLogoSrc from './assets/PhotoLogo.svg'

const logoMap = {
  code: codeLogoSrc,
  photo: photoLogoSrc,
}

const motionIconVariants: Variants = {
  primary: {
    backgroundColor: colors.inverted,
  },
  inverted: {
    backgroundColor: colors.black,
  },
  photo: {
    rotate: '0turn',
  },
  code: {
    rotate: '0turn',
  },
}

interface MotionIconRelatedProps {
  mode: 'photo' | 'code'
}

type MotionIconProps = AnimationProps & MotionProps & MotionIconRelatedProps
const MotionIcon = motion.custom(StyledIcon)
export const Icon: React.FC<MotionIconProps> = (props: MotionIconProps) => {
  const { mode } = props
  return (
    <MotionIcon
      initial={{ rotate: '-0.5turn' }}
      transition={{
        duration: 2,
      }}
      maskImage={logoMap[mode]}
      key={mode}
      variants={motionIconVariants}
      {...props}
    />
  )
}

const motionIconRectVariants: Variants = {
  primary: {
    backgroundColor: colors.black,
  },
  inverted: {
    backgroundColor: colors.inverted,
  },
}

type MotionIconRectProps = AnimationProps & MotionProps & StyledIconRectProps
const MotionIconRect = motion.custom(StyledIconRect)
export const IconRect: React.FC<MotionIconRectProps> = (
  props: MotionIconRectProps,
) => {
  return <MotionIconRect variants={motionIconRectVariants} {...props} />
}
