import React from 'react'
import styled from 'styled-components'

export const IconWrapper = styled.span`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  svg:first-child {
    width: 100%;
    height: 100%;
  }
  svg {
    position: absolute;
    width: 20px;
    height: 20px;
  }
`
