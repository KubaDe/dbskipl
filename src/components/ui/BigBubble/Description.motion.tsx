import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Text, { BaseTextProps } from 'components/simpleUi/Text'

interface DescriptionRelatedProps {}

export type MotionDescriptionProps = AnimationProps &
  DescriptionRelatedProps &
  BaseTextProps &
  MotionProps

const MotionDescription: React.FC<MotionDescriptionProps> = motion.custom(Text)

const Description: React.FC<MotionDescriptionProps> = (
  props: MotionDescriptionProps,
) => {
  const {} = props
  return (
    <MotionDescription
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...props}
    />
  )
}

export default Description
