import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Img, { BaseImgProps } from 'components/simpleUi/Img'

import diskSrc from './assets/Disk.png'

const variants: Variants = {
  active: {
    filter: ['brightness(0%)', 'brightness(0%)', 'brightness(100%)'],
    x: ['26vw', '0vw', '0vw'],
  },
  inactive: {
    x: '26vw',
    filter: 'brightness(0%)',
  },
  heroFull: {
    scale: 1,
    filter: 'brightness(100%)',
    x: '0vw',
  },
  heroCollapsed: {
    scale: 0.5,
    filter: 'brightness(100%)',
    x: '0vw',
  },
}

const transition: Transition = {
  duration: 2,
}

interface DiskRelatedProps {}

export type MotionDiskProps = AnimationProps &
  DiskRelatedProps &
  BaseImgProps &
  MotionProps

const MotionDisk: React.FC<MotionDiskProps> = motion.custom(Img)

const Disk: React.FC<Omit<MotionDiskProps, 'src' | 'title'>> = (
  props: Omit<MotionDiskProps, 'src' | 'title'>,
) => {
  return (
    <MotionDisk
      animate={'active'}
      initial="inactive"
      variants={variants}
      transition={transition}
      src={diskSrc}
      title=""
      position="absolute"
      left="0"
      top="0"
      my="auto"
      width="100%"
      {...props}
    />
  )
}

export default Disk
