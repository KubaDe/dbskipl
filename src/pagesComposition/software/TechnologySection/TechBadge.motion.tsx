import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Text, { BaseTextProps } from 'components/simpleUi/Text'

const variants: Variants = {
  inactive: {
    opacity: 0,
    y: 60,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring',
    },
  },
}

interface TechBadgeRelatedProps {}

export type MotionTechBadgeProps = AnimationProps &
  TechBadgeRelatedProps &
  BaseTextProps &
  MotionProps

const MotionTechBadge: React.FC<MotionTechBadgeProps> = motion.custom(Text)

const TechBadge: React.FC<MotionTechBadgeProps> = (
  props: MotionTechBadgeProps,
) => {
  return (
    <MotionTechBadge
      variants={variants}
      as="span"
      border="primary"
      boxShadow="primaries.300"
      m="xs"
      px="md"
      py="3xs"
      {...props}
    />
  )
}

export default TechBadge
