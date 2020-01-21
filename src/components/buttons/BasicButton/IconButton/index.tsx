import React from 'react'
import { motion } from 'framer-motion'

import { sizes } from 'config/theme/sizes'

import { MotionBasicButton, MotionBasicButtonProps } from '../MotionBasicButton'

const SIZE = '50px'

interface IconButtonRelatedProps {}

export type IconButtonProps = MotionBasicButtonProps & IconButtonRelatedProps

export const IconButton: React.FC<IconButtonProps> = (
  props: IconButtonProps,
) => {
  return (
    <MotionBasicButton
      size={SIZE}
      sizeVariant="none"
      alignItems="center"
      justifyContent="center"
    >
      <motion.svg
        width={`calc(${SIZE} - 2px)`}
        height={`calc(${SIZE} - 3px)`}
      >
        <motion.circle
          stroke="#000000"
          strokeWidth="2"
          fill="rgba(0, 0, 0, 0)"
          cx="50%"
          cy="50%"
          r="42%"
        />
      </motion.svg>
    </MotionBasicButton>
  )
}
