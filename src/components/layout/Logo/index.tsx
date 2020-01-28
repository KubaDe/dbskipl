import React from 'react'

import { Wrapper } from './Wrapper.motion'
import { IconRect, Icon } from './Icon.motion'
import { TextRect } from './Text.motion'
import { SubTextRect } from './SubText.motion'

interface LogoRelatedProps {
  baseSize?: number
  isInverted?: boolean
  isPhoto?: boolean
  isVertical?: boolean
  isShort?: boolean
}

type LogoProps = LogoRelatedProps

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const {
    baseSize = 54,
    isInverted = false,
    isPhoto = false,
    isVertical = false,
    isShort = false,
  } = props

  const animate = [
    isInverted ? 'inverted' : 'primary',
    isVertical ? 'vertical' : 'horizontal',
    isShort ? 'short' : 'long',
    `${isShort ? 'short' : 'long'}_${isVertical ? 'vertical' : 'horizontal'}`,
  ]

  return (
    <>
      <Wrapper
        baseSize={baseSize}
        animate={[...animate, isPhoto ? 'photo' : 'code']}
        initial={animate}
      >
        <IconRect baseSize={baseSize}>
          <Icon mode={isPhoto ? 'photo' : 'code'} />
        </IconRect>
        <TextRect baseSize={baseSize} isShort={isShort} />
      </Wrapper>
      <Wrapper
        baseSize={baseSize}
        animate={[...animate, isPhoto ? 'photo' : 'code']}
        initial={animate}
      >
        <SubTextRect baseSize={baseSize} />
      </Wrapper>
    </>
  )
}

export default Logo
