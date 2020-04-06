import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

import { colors } from 'config/theme/colors'

const transition: Transition = {
  duration: 1.5,
}

const variants: Variants = {
  before: {
    backgroundColor: colors.inverted,
    opacity: 0,
    transition,
  },
  active: {
    backgroundColor: colors.primary,
    opacity: 1,
    transition,
  },
  after: {
    backgroundColor: colors.inverted,
    opacity: 0,
    transition,
  },
}

interface SectionLayoutRelatedProps {}

export type MotionSectionLayoutProps = AnimationProps &
  SectionLayoutRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionSectionLayout: React.FC<MotionSectionLayoutProps> = motion.custom(
  Flex,
)

const SectionLayout: React.FC<MotionSectionLayoutProps> = (
  props: MotionSectionLayoutProps,
) => {
  const {} = props
  return (
    <MotionSectionLayout
      initial="before"
      variants={variants}
      height="120vh"
      maxHeight="3000px"
      position="relative"
      flexDirection="row"
      {...props}
    />
  )
}

export default SectionLayout
