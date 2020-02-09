import React from 'react'
import styled, { css } from 'styled-components'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

interface ImgRelatedProps {
  src: string
  title: string
  noselect?: boolean
}

export type BaseImgProps = BaseBoxProps & ImgRelatedProps

const Img: React.FC<BaseImgProps> = styled(Box).attrs({ as: 'img' })<
  BaseImgProps
>`
  ${props =>
    props.noselect &&
    css`
      user-select: none;
      pointer-events: none;
    `}
`

export default Img
