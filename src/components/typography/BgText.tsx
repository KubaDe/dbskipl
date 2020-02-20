import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

import Text, { BaseTextProps } from 'components/simpleUi/Text'
import Box from 'components/simpleUi/Box'

interface BgTextRelatedProps {
  padSize?: string
}

export type BgTextProps = BaseTextProps & BgTextRelatedProps

const BgTextPropsComponent: React.FC<BgTextProps> = styled(Text)`
  box-decoration-break: clone;
  ${css({
    as: 'h1',
    fontSize: 'display2',
    fontFamily: 'secondary',
  })}
`

const Highlight = styled(Box).attrs({ as: 'span' })<BgTextProps>`
  ${css({
    backgroundColor: 'black',
    color: 'inverted',
    display: 'inline',
  })};
  line-height: 1.4em;
  box-decoration-break: clone;
  box-shadow: ${props => themeGet(`space.${props.padSize}`, '0')} 0 0
      ${themeGet('colors.black', '#000')},
    -${props => themeGet(`space.${props.padSize}`, '0')} 0 0 ${themeGet('colors.black', '#000')};
`

const BgTextProps: React.FC<BgTextProps> = ({
  children,
  padSize,
  ...props
}: BgTextProps) => (
  <BgTextPropsComponent {...props}>
    <Highlight padSize={padSize || 'md'}>{children}</Highlight>
  </BgTextPropsComponent>
)

export default BgTextProps
