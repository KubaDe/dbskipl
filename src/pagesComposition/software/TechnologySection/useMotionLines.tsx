import { useCallback } from 'react'
import { useMotionValue, useTransform, useSpring } from 'framer-motion'

interface UseMotionLinesProps {}

const useMotionLines = (props?: UseMotionLinesProps) => {
  const motionValue = useMotionValue(0)
  const transform1 = useTransform(motionValue, value => {
    return `${Math.floor(value * 100) - 100}vw`
  })
  const x1 = useSpring(transform1, {
    damping: 100,
    mass: 5,
  })

  const transform2 = useTransform(motionValue, value => {
    return `${Math.floor(value * -100) + 100}vw`
  })
  const x2 = useSpring(transform2, {
    damping: 100,
    mass: 5,
  })
  const updateLine = useCallback(
    (progress: number) => {
      motionValue.set(progress)
    },
    [motionValue],
  )
  return {
    updateLine,
    x1,
    x2,
  }
}

export default useMotionLines
