import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'
import { useIntersection } from 'react-use'

const variants: Variants = {
  inactive: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  active: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  whileHover: {
    scale: 1.02,
    transition: {
      duration: 0.25,
      type: 'tween',
    },
  },
}

interface WidgetWrapperRelatedProps {
  isOpen: boolean
}

export type MotionWidgetWrapperProps = AnimationProps &
  WidgetWrapperRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionWidgetWrapper: React.FC<MotionWidgetWrapperProps> = motion.custom(
  Flex,
)

const WidgetWrapper: React.FC<MotionWidgetWrapperProps> = (
  props: MotionWidgetWrapperProps,
) => {
  const { isOpen } = props
  const ref = useRef(null)
  const intersection = useIntersection(ref, {
    rootMargin: '-100px 0px -100px 0px',
    threshold: 0.2,
  })
  const [animationState, setAnimationState] = useState(['shine', 'inactive'])
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setAnimationState(['shine', 'active'])
    }
  }, [intersection])
  return (
    <MotionWidgetWrapper
      animate={[isOpen ? 'whileHover' : '', ...animationState]}
      ref={ref}
      initial="inactive"
      variants={variants}
      whileHover="whileHover"
      transition={{
        type: 'spring',
        duration: 1,
      }}
      {...props}
    />
  )
}

export default WidgetWrapper
