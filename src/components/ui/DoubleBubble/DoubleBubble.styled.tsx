import React, { useRef } from 'react'
import styled, { keyframes, Keyframes } from 'styled-components'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

import educationBubblesSrc from './assets/EducationBubbles.svg'
import { breakpoints } from 'config/theme/breakpoints'

const horizontalAnimation = keyframes`
  from {
    transform: translateX(-10px);
  }
  to {
      transform: translateX(10px);
  }
`

const verticalAnimation = keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(20px);
  }
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(-10deg);
  }
  to{
    transform: rotate(10deg);
  }
`

interface DoubleBubbleRelatedProps {
  animating?: boolean
}

export type StyledDoubleBubbleProps = DoubleBubbleRelatedProps & BaseBoxProps
export type StyledAnimationWrapperProps = BaseBoxProps & {
  delay: number
  animating?: boolean
  keyframes: Keyframes
  duration: number
}

const DoubleBubbleStyled = styled(Box)<DoubleBubbleRelatedProps>`
  @media (max-width: ${breakpoints.md}) {
    transform-origin: 0 50%;
    transform: scale(0.6);
  }
`

const AnimationWrapper = styled(Box)<StyledAnimationWrapperProps>`
  animation: ${props => props.keyframes} ${props => props.duration}s
    ${props => props.delay}s ease-in-out both alternate infinite;
  animation-play-state: ${props => (props.animating ? 'running' : 'paused')};
`

const DoubleBubble: React.FC<StyledDoubleBubbleProps> = (
  props: StyledDoubleBubbleProps,
) => {
  const { animating = false } = props
  return (
    <AnimationWrapper
      delay={useRef(Math.random() * -4).current}
      duration={1}
      animating={animating}
      keyframes={rotateAnimation}
    >
      <AnimationWrapper
        delay={useRef(Math.random() * -4).current}
        duration={2}
        animating={animating}
        keyframes={verticalAnimation}
      >
        <AnimationWrapper
          delay={useRef(Math.random() * -4).current}
          duration={3}
          animating={animating}
          keyframes={horizontalAnimation}
        >
          <DoubleBubbleStyled
            backgroundImage={`url("${educationBubblesSrc}")`}
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            backgroundPosition="top left"
            position="relative"
            {...props}
          />
        </AnimationWrapper>
      </AnimationWrapper>
    </AnimationWrapper>
  )
}

export default DoubleBubble
