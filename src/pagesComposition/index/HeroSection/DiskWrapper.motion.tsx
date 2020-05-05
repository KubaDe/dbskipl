import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const variants: Variants = {
  heroFull: {
    scale: 1,
    originY: 1,
  },
  heroCollapsed: {
    scale: 0.75,
    originY: 1,
  },
}

const transition: Transition = {
  duration: 0.5,
}

interface DiskWrapperRelatedProps {}

export type MotionDiskWrapperProps = AnimationProps &
  DiskWrapperRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionDisk: React.FC<MotionDiskWrapperProps> = motion.custom(Box)

const Disk: React.FC<MotionDiskWrapperProps> = (
  props: MotionDiskWrapperProps,
) => {
  return (
    <MotionDisk
      initial="inactive"
      variants={variants}
      transition={transition}
      position="relative"
      mt={{_: 'calc(50vh - 40vw - 84px)', lg: 'calc(50vh - 20vw)'}}
      mx="auto"
      width={{ _: '80vw', lg: '40vw' }}
      height={{ _: '80vw', lg: '40vw' }}
      {...props}
    />
  )
}

export default Disk
