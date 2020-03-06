import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

import Text, { BaseTextProps } from 'components/simpleUi/Text'
import Box from 'components/simpleUi/Box'

interface BgTextRelatedProps {
  padSize?: string
  inverted?: boolean
}

export type BgTextProps = BaseTextProps & BgTextRelatedProps

const BgTextPropsComponent: React.FC<BgTextProps> = styled(Text)`
  box-decoration-break: clone;
`

const Highlight = styled(Box).attrs({ as: 'span' })<BgTextProps>`
  ${props =>
    css({
      backgroundColor: props.inverted ? 'inverted' : 'black',
      color: props.inverted ? 'black' : 'inverted',
      display: props.inverted ? 'black' : 'inline',
    })};
  line-height: 1.4em;
  box-decoration-break: clone;
  box-shadow: ${props => themeGet(`space.${props.padSize}`, '0')} 0 0
      ${props =>
        themeGet(props.inverted ? 'colors.inverted' : 'colors.black', '#000')},
    -${props => themeGet(`space.${props.padSize}`, '0')} 0 0 ${props => themeGet(props.inverted ? 'colors.inverted' : 'colors.black', '#000')};
`

const BgTextProps: React.FC<BgTextProps> = ({
  children,
  padSize = 'md',
  inverted = false,
  ...props
}: BgTextProps) => (
  <BgTextPropsComponent {...props}>
    <Highlight padSize={padSize} inverted={inverted}>
      {children}
    </Highlight>
  </BgTextPropsComponent>
)

export default BgTextProps
