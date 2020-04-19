import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const variants: Variants = {
  open: {
    height: 'auto',
    opacity: 1,
  },
  closed: {
    height: 0,
    opacity: 0,
  },
}

interface DetailsSectionWrapperRelatedProps {
  isOpen: boolean
}

export type MotionDetailsSectionWrapperProps = AnimationProps &
  DetailsSectionWrapperRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionDetailsSectionWrapper: React.FC<MotionDetailsSectionWrapperProps> = motion.custom(
  Box,
)

const DetailsSectionWrapper: React.FC<MotionDetailsSectionWrapperProps> = (
  props: MotionDetailsSectionWrapperProps,
) => {
  const { isOpen } = props
  const animationState = isOpen ? 'open' : 'closed'
  return (
    <MotionDetailsSectionWrapper
      animate={animationState}
      initial="closed"
      variants={variants}
      width="100%"
      px="xl"
      {...props}
    />
  )
}

export default DetailsSectionWrapper
