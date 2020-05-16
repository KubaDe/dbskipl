import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const variants: Variants = {
  before: {
    scale: 1.5,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  active: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.8,
    },
  },
  after: {},
}

interface ProjectButtonWrapperRelatedProps {}

export type MotionProjectButtonWrapperProps = AnimationProps &
  ProjectButtonWrapperRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionProjectButtonWrapper: React.FC<MotionProjectButtonWrapperProps> = motion.custom(
  Box,
)

const ProjectButtonWrapper: React.FC<MotionProjectButtonWrapperProps> = (
  props: MotionProjectButtonWrapperProps,
) => {
  const {} = props
  return (
    <MotionProjectButtonWrapper
      initial="before"
      variants={variants}
      {...props}
    />
  )
}

export default ProjectButtonWrapper
