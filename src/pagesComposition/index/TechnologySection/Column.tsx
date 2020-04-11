import styled from 'styled-components'
import { math } from 'polished'

import borderStripesVerticalSrc from './assets/BorderStripesVertical.svg'
import { breakpoints } from 'config/theme/breakpoints'

import MotionColumn, { MotionColumnProps } from './Column.motion'


const ColumnStyled = styled(MotionColumn)<MotionColumnProps>`
  @media (max-width: ${breakpoints.lg}) {
  :after, :before {
      content: "";
      position: absolute;
      top: 16px;
      bottom: 16px;
      right: 0;
      width: 12px;
      background: url("${borderStripesVerticalSrc}") repeat-y;
    }
  
    :before {
      left: 0;
      right: auto;
    }    
  }
  @media (min-width: ${math(`${breakpoints.lg} + 1px`)}) {
    :after, &:first-child:before {
      content: "";
      position: absolute;
      top: -100px;
      bottom: -200px;
      right: -6px;
      width: 12px;
      background: url("${borderStripesVerticalSrc}") repeat-y;
    }
  
    &:first-child:before {
      left: 6px;
      right: auto;
    }    
  }
`

export default ColumnStyled
