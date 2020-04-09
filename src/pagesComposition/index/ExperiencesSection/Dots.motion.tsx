import React from 'react'
import styled from 'styled-components'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

import dotsPatternSrc from './assets/dotsPattern.png'

const variants: Variants = {
  before: {
    rotate: 0,
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
  active: {
    rotate: '15deg',
    scale: 1.4,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
  after: {
    rotate: 0,
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
}

interface DotsRelatedProps {}

export type MotionDotsProps = AnimationProps &
  DotsRelatedProps &
  BaseBoxProps &
  MotionProps

const StyledBox: React.FC<MotionDotsProps> = styled(Box).attrs({
  top: { _: '-100px', lg: '0' },
})`
  position: absolute;
  width: 100vw;
  height: 100%;
  opacity: .5;
  background-size: cover;
  left: 0;
   background: url("${dotsPatternSrc}") no-repeat left;
`

const MotionDots: React.FC<MotionDotsProps> = motion.custom(StyledBox)

const Dots: React.FC<MotionDotsProps> = (props: MotionDotsProps) => {
  const {} = props
  return <MotionDots initial="before" variants={variants} {...props} />
}

export default Dots
