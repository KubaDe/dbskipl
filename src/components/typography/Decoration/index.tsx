import React from 'react'
import styled from 'styled-components'
import systemCss from '@styled-system/css'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

import maskSrc from './assets/mask2.png'

interface DecorationRelatedProps {
  decorationColor?: string
  decorationOpacity?: number
}

export type DecorationProps = BaseBoxProps & DecorationRelatedProps

const Decoration: React.FC<DecorationProps> = styled(Box).attrs({ as: 'span' })<
  DecorationProps
>`
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 103%;
    height: 30%;
    top: 55%;
    left: 0%;
    z-index: -1;
    transform: rotate(-1.5deg);
    mask-image: url("${maskSrc}");
    mask-size: 200px;
    ${props =>
      systemCss({
        backgroundColor: props.decorationColor || 'primary',
        opacity: props.decorationOpacity || 0.8,
      })}
  }
`

export default Decoration
