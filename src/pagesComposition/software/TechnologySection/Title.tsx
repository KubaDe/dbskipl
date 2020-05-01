import React from 'react'
import styled from 'styled-components'
import {
  motion,
  AnimationProps,
  MotionProps,
  Variants,
  Transition,
} from 'framer-motion'

import Heading, { HeadingProps } from 'components/typography/Heading'

import { colors } from 'config/theme/colors'

const transition: Transition = {
  duration: 1,
}

const variants: Variants = {
  before: {
    x: '-100vw',
    transition,
  },
  active: {
    x: 0,
    transition,
  },
  after: {
    x: '100vw',
    transition,
  },
}

interface TitleRelatedProps {}

export type MotionTitleProps = AnimationProps &
  TitleRelatedProps &
  HeadingProps &
  MotionProps

const MotionTitle: React.FC<MotionTitleProps> = motion.custom(Heading)

const StyledMotionTitle = styled(MotionTitle).attrs({
  width: '100%',
  textAlign: { _: 'center', md: 'left' },
  fontSize: 'h1',
  fontFamily: 'secondary',
  position: 'relative',
  py: 'lg',
})`
  :before,
  :after {
    content: '';
    position: absolute;
    display: block;
    left: -200vw;
    width: 500vw;
    top: 0;
    height: 0;
    border-top: 1px solid ${colors.black};
  }

  :after {
    top: auto;
    bottom: 0;
  }
`

const Title: React.FC<MotionTitleProps> = (props: MotionTitleProps) => {
  const {} = props
  return <StyledMotionTitle variants={variants} {...props} />
}

export default Title
