import React from 'react'
import styled, { css } from 'styled-components'

import { motion, AnimationProps, MotionProps, MotionValue } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

import BorderStripesHorizontal from './assets/BorderStripesHorizontal.svg'

interface HorizontalLineRelatedProps {
  x: MotionValue
  bottomBorder?: boolean
}

export type MotionHorizontalLineProps = AnimationProps &
  HorizontalLineRelatedProps &
  BaseBoxProps &
  MotionProps

const MotionHorizontalLine: React.FC<MotionHorizontalLineProps> = motion.custom(
  Box,
)

const HorizontalLine: React.FC<MotionHorizontalLineProps> = (
  props: MotionHorizontalLineProps,
) => {
  const { x } = props
  return <MotionHorizontalLine style={{ x }} {...props} />
}

const StyledHorizontalLine = styled(HorizontalLine)<MotionHorizontalLineProps>` 
  position: absolute;
  right: -200px;
  left: -200px;
  top: -42px;
  ${props =>
    props.bottomBorder &&
    css`
      top: auto;
      bottom: 64px;
    `}
   :before {
    content: "";
    display: block;    
    height: 12px;
    background: url("${BorderStripesHorizontal}") repeat-x;
  }
`

export default StyledHorizontalLine
