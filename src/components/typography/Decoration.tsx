import React from 'react'
import styled from 'styled-components'
import systemCss from '@styled-system/css'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

interface DecorationRelatedProps {
  decorationColor?: string
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
    width: 110%;
    height: 24%;
    top: 60%;
    left: -5%;
    z-index: -1;
    opacity: 0.35;
    transform: rotate(-1.5deg);
    ${props =>
      systemCss({
        backgroundColor: props.decorationColor || 'primary',
      })}
  }
`

export default Decoration
