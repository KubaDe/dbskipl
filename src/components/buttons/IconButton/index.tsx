import React from 'react'
import { motion, Variants } from 'framer-motion'

import {
  MotionBasicButton,
  MotionBasicButtonProps,
} from 'components/buttons/BasicButton'

import { IconWrapper } from './IconButton.styled'
const SIZE = '50px'

interface IconButtonRelatedProps {
  icon: React.FC
}

export type IconButtonProps = MotionBasicButtonProps & IconButtonRelatedProps

const circleVariants: Variants = {
  primary: {
    stroke: '#000000',
  },
  secondary: {
    stroke: '#FFFFFF',
  },
}

export const IconButton: React.FC<IconButtonProps> = (
  props: IconButtonProps,
) => {
  const { icon: Icon, type } = props
  return (
    <MotionBasicButton
      size={SIZE}
      sizeVariant="none"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <motion.svg
        width={`calc(${SIZE} - 2px)`}
        height={`calc(${SIZE} - 3px)`}
        animate={type}
      >
        <motion.circle
          variants={circleVariants}
          strokeWidth="2"
          stroke="#000000"
          fill="rgba(0, 0, 0, 0)"
          cx="50%"
          cy="50%"
          r="42%"
        />
      </motion.svg>
      <IconWrapper>
        <Icon />
      </IconWrapper>
    </MotionBasicButton>
  )
}
