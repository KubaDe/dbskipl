import React, { useRef } from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'
import { useIntersection } from 'react-use'

const variants: Variants = {
  active: {
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
  inactive: {
    transition: { staggerChildren: 0.2, delayChildren: 0.4, staggerDirection: -1 },
  },
}

interface ColumnRelatedProps {}

export type MotionColumnProps = AnimationProps &
  ColumnRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionColumn: React.FC<MotionColumnProps> = motion.custom(Flex)

const Column: React.FC<MotionColumnProps> = (props: MotionColumnProps) => {
  const ref = useRef(null)
  const intersection = useIntersection(ref, {
    rootMargin: '-20px 0px -100px 0px',
    threshold: 0.2,
  })

  return (
    <MotionColumn
      initial="inactive"
      animate={intersection?.isIntersecting ? 'active' : 'inactive'}
      variants={variants}
      ref={ref}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      position="relative"
      py={{ _: 'lg', lg: 0 }}
      {...props}
    />
  )
}

export default Column
