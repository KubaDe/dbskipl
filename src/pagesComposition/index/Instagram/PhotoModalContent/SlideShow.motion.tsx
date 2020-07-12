import React from 'react'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  AnimatePresence,
} from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '100vw' : '-100vw',
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? '100vw' : '-100vw',
      opacity: 0,
    }
  },
}

interface SlideShowRelatedProps {
  onNext: (e: MouseEvent) => void
  onPrevious: (e: MouseEvent) => void
  index: string
  direction: number
}

export type MotionSlideShowProps = AnimationProps &
  SlideShowRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionSlideShow: React.FC<MotionSlideShowProps> = motion.custom(Box)

const SlideShow: React.FC<MotionSlideShowProps> = (
  props: MotionSlideShowProps,
) => {
  const { onPrevious, onNext, index, direction } = props

  return (
    <AnimatePresence initial={false} custom={direction}>
      <MotionSlideShow
        key={index}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          opacity: { duration: 0.2 },
          duration: .5
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x)
          if (swipe < -swipeConfidenceThreshold) {
            onNext(e as MouseEvent)
          } else if (swipe > swipeConfidenceThreshold) {
            onPrevious(e as MouseEvent)
          }
        }}
        position='absolute'
        {...props}
      />
    </AnimatePresence>
  )
}

export default SlideShow
