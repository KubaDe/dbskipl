import React from 'react'
import { motion, AnimationProps, MotionProps } from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

interface WrapperRelatedProps {}

export type MotionWrapperProps = AnimationProps &
  WrapperRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionWrapper: React.FC<MotionWrapperProps> = motion.custom(Flex)

const Wrapper: React.FC<MotionWrapperProps> = (props: MotionWrapperProps) => {
  const {} = props
  return (
    <MotionWrapper
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      exit={{ opacity: 0 }}
      position="fixed"
      height="100%"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      backgroundColor="white"
      zIndex={999}
      {...props}
    />
  )
}

export default Wrapper
