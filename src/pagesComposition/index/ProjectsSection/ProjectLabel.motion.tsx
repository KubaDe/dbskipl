import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

const variants: Variants = {
  before: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  active: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
  after: {},
}

interface ProjectLabelRelatedProps {}

export type MotionProjectLabelProps = AnimationProps &
  ProjectLabelRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionProjectLabel: React.FC<MotionProjectLabelProps> = motion.custom(
  Flex,
)

const ProjectLabel: React.FC<MotionProjectLabelProps> = (
  props: MotionProjectLabelProps,
) => {
  const {} = props
  return (
    <MotionProjectLabel
      animate={''}
      initial="before"
      variants={variants}
      mt="lg"
      height="60px"
      as="a"
      {...props}
    />
  )
}

export default ProjectLabel
