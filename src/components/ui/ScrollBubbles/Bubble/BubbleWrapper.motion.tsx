import React, { forwardRef } from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import { StyledBubbleWrapper, StyledBubbleWrapperProps } from './Bubble.styled'

const transition: Transition = {
  when: 'beforeChildren',
  duration: 1,
  damping: 100,
  mass: 5,
}

const variants: Variants = {
  normal: {
    scale: 1,
    y: 0,
    transition,
  },
  zoom: {
    scale: 1.45,
    y: -20,
    transition,
  },
}

interface BubbleWrapperRelatedProps {}

export type MotionBubbleWrapperProps = AnimationProps &
  BubbleWrapperRelatedProps &
  StyledBubbleWrapperProps &
  MotionProps

const MotionBubbleWrapper: React.FC<MotionBubbleWrapperProps> = motion.custom(
  StyledBubbleWrapper,
)

const BubbleWrapper: React.FC<MotionBubbleWrapperProps> = forwardRef(
  (props: MotionBubbleWrapperProps, ref) => {
    const {} = props
    return (
      <MotionBubbleWrapper
        ref={ref}
        initial="normal"
        variants={variants}
        {...props}
      />
    )
  },
)

export default BubbleWrapper
