import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import inject from 'hoc/inject'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'
import Flex from 'components/simpleUi/Flex'

import { colors } from 'config/theme/colors'

const SectionLayout = inject(Box, {
  position: 'relative',
})

const SectionGrid = inject(Flex, {
  height: { _: 'calc(100vh - 76px)', md: '100vh' },
  maxHeight: '900px',
  mt: { _: '76px', md: 0 },
  px: { _: 'md', md: '3xl' },
  ml: { _: 0, md: '86px' },
  flexDirection: 'column',
})

const variants: Variants = {
  before: {
    backgroundColor: colors.inverted,
    opacity: 0,
  },
  active: {
    backgroundColor: colors.secondary,
    opacity: 1,
  },
  after: {
    backgroundColor: colors.inverted,
    opacity: 0,
  },
}

interface WrapperRelatedProps {}

export type MotionWrapperProps = AnimationProps &
  WrapperRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionWrapper: React.FC<MotionWrapperProps> = motion.custom(Box)

const Wrapper: React.FC<MotionWrapperProps> = (props: MotionWrapperProps) => {
  const { children, ...rest } = props
  return (
    <MotionWrapper variants={variants} {...rest}>
      <SectionLayout>
        <SectionGrid>{children}</SectionGrid>
      </SectionLayout>
    </MotionWrapper>
  )
}

export default Wrapper
