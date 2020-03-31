import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

import { colors } from 'config/theme/colors'

const variants: Variants = {
  before: {
    backgroundColor: colors.inverted,
    opacity: 0,
  },
  active: {
    backgroundColor: colors.primary,
    opacity: 1,
  },
  after: {
    backgroundColor: colors.inverted,
    opacity: 0,
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
      borderTop="primary"
      flexDirection="row"
      {...props}
    />
  )
}

export default SectionLayout
