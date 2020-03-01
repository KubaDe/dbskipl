import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
} from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

import { TriggerPoint } from '../useFullPageModalLogic'

const variants: Variants = {
  initial: ({ x, y }: TriggerPoint) => ({
    x,
    y,
    width: '0px',
    height: '0px',
    transition: {
      duration: 0,
    },
  }),
  active: {
    x: 'min(-25vw, -25vh)',
    y: 'min(-25vw, -25vh)',
    width: 'max(150vw, 150vh)',
    height: 'max(150vw, 150vh)',
    transition: {
      duration: 1,
    },
  },
}

interface IntroRelatedProps {
  triggerPoint: TriggerPoint
}

export type MotionIntroProps = AnimationProps &
  IntroRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionIntro: React.FC<MotionIntroProps> = motion.custom(Box)

const Intro: React.FC<MotionIntroProps> = (props: MotionIntroProps) => {
  const { triggerPoint } = props
  return (
    <MotionIntro
      variants={variants}
      custom={triggerPoint}
      initial="initial"
      {...props}
    />
  )
}

export default Intro
