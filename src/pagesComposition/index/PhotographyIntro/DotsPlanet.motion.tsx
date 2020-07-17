import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Img, { BaseImgProps } from 'components/simpleUi/Img'

import dotsPlanetSrc from './assets/dotsPlanet.svg'

const variants: Variants = {
  before: {
    opacity: 0,
    scale: 1.3,
    transition: {
      delay: 0,
      duration: 0.3,
    },
  },
  active: {
    scale: 1,
    opacity: 1,
  },
  after: {
    scale: 1,
    opacity: 0,
  },
}

const transition: Transition = {
  delay: 1.25,
  duration: 1,
}
interface DotsPlanetRelatedProps {}

export type MotionDotsPlanetProps = AnimationProps &
  DotsPlanetRelatedProps &
  BaseImgProps &
  MotionProps

const MotionDotsPlanet: React.FC<MotionDotsPlanetProps> = motion.custom(Img)

type DotsPlanetProps = Omit<MotionDotsPlanetProps, 'title' | 'src'>

const DotsPlanet: React.FC<DotsPlanetProps> = (props: DotsPlanetProps) => {
  const {} = props
  return (
    <MotionDotsPlanet
      initial="before"
      variants={variants}
      transition={transition}
      title="Pattern"
      src={dotsPlanetSrc}
      width={{ _: '80px', md: '100px', lg: '150px' }}
      {...props}
    />
  )
}

export default DotsPlanet
