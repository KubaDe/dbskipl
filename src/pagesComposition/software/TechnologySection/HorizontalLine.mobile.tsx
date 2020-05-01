import styled, { css } from 'styled-components'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

import BorderStripesHorizontal from './assets/BorderStripesHorizontal.svg'

interface HorizontalLineRelatedProps {
  bottomBorder?: boolean
}

export type HorizontalLineProps = HorizontalLineRelatedProps & BaseBoxProps

const StyledHorizontalLine = styled(Box)<HorizontalLineProps>` 
  position: absolute;
  right: 24px;
  left: 24px;
  top: -8px;

 :before {
  content: "";
  display: block;    
  height: 12px;
  background: url("${BorderStripesHorizontal}") repeat-x;
  }
  ${props =>
    props.bottomBorder &&
    css`
      top: auto;
      bottom: -8px;
    `}
`

export default StyledHorizontalLine
