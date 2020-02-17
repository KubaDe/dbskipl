import { useEffect } from 'react';
import { useSpring, useTransform } from 'framer-motion';
// @ts-ignore
import { interpolate } from 'flubber'
import svgPaths from './svgPaths';

const interpolator = interpolate(svgPaths.closed, svgPaths.open, {
  maxSegmentLength: 3,
})


export default (isOpen: boolean) => {
  const y = useSpring(0, {
    damping: 100,
    mass: 5,
  })
  const path = useTransform(y, latest => interpolator(latest))
  useEffect(() => {
    y.set(!!isOpen)
  }, [isOpen])
  return path
}

