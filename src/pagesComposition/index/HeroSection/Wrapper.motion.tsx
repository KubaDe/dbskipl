import React, { useEffect, useState } from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  useViewportScroll,
} from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const useProgressAnimationState = () => {
  const { scrollY } = useViewportScroll()
  const [animationState, setAnimationState] = useState('heroFull')
  useEffect(() => {
    const updateAnimationState = (value: number) => {
      setAnimationState(value < 20 ? 'heroFull' : 'heroCollapsed')
    }
    const unsubscribe = scrollY.onChange(updateAnimationState)
    return () => {
      unsubscribe()
    }
  }, [])
  return animationState
}

const variants: Variants = {}

interface WrapperRelatedProps {}

export type MotionWrapperProps = AnimationProps &
  WrapperRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionWrapper: React.FC<MotionWrapperProps> = motion.custom(Box)

const Wrapper: React.FC<MotionWrapperProps> = (props: MotionWrapperProps) => {
  const animationState = useProgressAnimationState()
  return (
    <MotionWrapper
      animate={animationState}
      initial="active"
      variants={variants}
      width="100%"
      height="100%"
      {...props}
    />
  )
}

export default Wrapper
