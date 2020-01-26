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
}

type LogoProps = LogoRelatedProps

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const {
    baseSize = 54,
    isInverted = false,
    isPhoto = false,
    isVertical = false,
  } = props
  return (
    <>
      <Wrapper
        baseSize={baseSize}
        initial={[
          isInverted ? 'inverted' : 'primary',
          isVertical ? 'vertical' : 'horizontal',
        ]}
        animate={[
          isInverted ? 'inverted' : 'primary',
          isPhoto ? 'photo' : 'code',
          isVertical ? 'vertical' : 'horizontal',
        ]}
      >
        <IconRect baseSize={baseSize}>
          <Icon mode={isPhoto ? 'photo' : 'code'} />
        </IconRect>
        <TextRect baseSize={baseSize} />
      </Wrapper>
      <Wrapper
        baseSize={baseSize}
        initial={[
          isInverted ? 'inverted' : 'primary',
          isPhoto ? 'photo' : 'code',
          isVertical ? 'vertical' : 'horizontal',
        ]}
        animate={[
          isInverted ? 'inverted' : 'primary',
          isPhoto ? 'photo' : 'code',
          isVertical ? 'vertical' : 'horizontal',
        ]}
      >
        <SubTextRect baseSize={baseSize} />
      </Wrapper>
    </>
  )
}

export default Logo
