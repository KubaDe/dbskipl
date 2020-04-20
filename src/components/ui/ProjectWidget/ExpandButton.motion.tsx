import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'
import Img from 'components/simpleUi/Img'

import downArrowSvg from './assets/angle-down.svg'

const variants: Variants = {
  open: {
    rotate: '180deg',
    scale: 1,
  },
  closed: {
    rotate: 0,
    scale: 1,
  },
  whileHover: {
    scale: 1.2,
    transition: {
      type: 'spring',
    },
  },
}

interface ExpandButtonRelatedProps {
  isOpen: boolean
}

export type MotionExpandButtonProps = AnimationProps &
  ExpandButtonRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionExpandButton: React.FC<MotionExpandButtonProps> = motion.custom(Box)

const ExpandButton: React.FC<MotionExpandButtonProps> = (
  props: MotionExpandButtonProps,
) => {
  const { isOpen } = props
  const animationState = isOpen ? 'open' : 'closed'
  return (
    <MotionExpandButton
      initial="open"
      variants={variants}
      animate={animationState}
      whileHover="whileHover"
      position="absolute"
      right="sm"
      bottom="md"
      background="none"
      border="none"
      as="button"
      title="Expand"
      {...props}
    >
      <Img src={downArrowSvg} title="Expand" width="20px" height="20px" />
    </MotionExpandButton>
  )
}

export default ExpandButton
