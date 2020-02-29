import React from 'react'
import { motion, AnimationProps, MotionProps } from 'framer-motion'

import Heading, { HeadingProps } from 'components/typography/Heading'

interface TitleRelatedProps {}

export type MotionTitleProps = AnimationProps &
  TitleRelatedProps &
  HeadingProps &
  MotionProps

const MotionTitle: React.FC<MotionTitleProps> = motion.custom(Heading)

const Title: React.FC<MotionTitleProps> = (props: MotionTitleProps) => {
  const {} = props
  return (
    <MotionTitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} {...props} />
  )
}

export default Title
