import React, { useEffect } from 'react'
import delay from 'lodash/delay'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  useSpring,
  useTransform,
} from 'framer-motion'

import Img, { BaseImgProps } from 'components/simpleUi/Img'
import { useSpineRef } from 'components/layout/buildingBlocks/ScrollBlocks/Spine'
import useDebouncedScrollEffect from 'hooks/useDebouncedScrollEffect'

const BackgroundImageVariants: Variants = {
  initial: { opacity: 0, y: -20, x: -20 },
  stable: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 2,
      delay: 2,
    },
  },
}

interface BackgroundImageRelatedProps {
  delayTime?: number
}

export type BackgroundImageProps = AnimationProps &
  BackgroundImageRelatedProps &
  BaseImgProps &
  MotionProps

const MotionBackgroundImage: React.FC<BackgroundImageProps> = motion.custom(Img)

const BackgroundImage: React.FC<BackgroundImageProps> = (
  props: BackgroundImageProps,
) => {
  const { delayTime = 0 } = props
  const ref = useSpineRef()
  const value = useSpring(0)
  const transform = useTransform(value, (value: number): number => value * 0.3)

  ref &&
    useDebouncedScrollEffect(
      ref,
      ({ y }) => {
        delay(() => value.set(y), delayTime)
      },
      3,
    )

  return (
    <MotionBackgroundImage
      variants={BackgroundImageVariants}
      {...props}
      style={{ y: transform }}
      zIndex={0}
    />
  )
}

export default BackgroundImage
