import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Img, { BaseImgProps } from 'components/simpleUi/Img'

import spikeLeftSrc from './assets/spikeLeft.svg'
import spikeRightSrc from './assets/spikeRight.svg'

const variants: Variants = {
  before: ({ reversed }) => ({
    x: reversed ? '30%' : '-30%',
    scale: 0.7,
    opacity: 0,
  }),
  active: ({ reversed }) => ({
    x: 0,
    scale: 1,
    opacity: 1,
  }),
  after: ({ reversed }) => ({
    x: 0,
    scale: 1,
    opacity: 1,
  }),
}

interface SpikeRelatedProps {
  reversed?: boolean
  delay?: number
}

export type MotionSpikeProps = AnimationProps &
  BaseImgProps &
  MotionProps &
  SpikeRelatedProps

const MotionSpike: React.FC<MotionSpikeProps> = motion.custom(Img)

type SpikeProps = Omit<MotionSpikeProps, 'title' | 'src'>

const Spike: React.FC<SpikeProps> = (props: SpikeProps) => {
  const { reversed, delay = 0 } = props
  return (
    <MotionSpike
      custom={{ reversed }}
      transition={{
        delay: delay + 0.2,
        type: 'spring',
      }}
      initial="before"
      variants={variants}
      src={reversed ? spikeLeftSrc : spikeRightSrc}
      title=""
      width={{ _: 'auto', md: '30vw' }}
      height={{ _: '50px', md: 'auto' }}
      maxWidth="800px"
      mx="2xl"
      {...props}
    />
  )
}

export default Spike
