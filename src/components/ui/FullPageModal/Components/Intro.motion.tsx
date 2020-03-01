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
    x: 'min(-50vw, -50vh)',
    y: 'min(-50vw, -50vh)',
    width: 'max(200vw, 200vh)',
    height: 'max(200vw, 200vh)',
    transition: {
      duration: 1.5,
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
