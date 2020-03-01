import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

interface ButtonRelatedProps {
  outline?: boolean
}

const sizeVariants = {
  xsmall: {
    fontSize: 'buttonXSmall',
    fontWeight: '700',
    height: 'xs',
    px: 'xs',
  },
  small: {
    fontSize: 'buttonSmall',
    fontWeight: '700',
    height: 'md',
    px: 'md',
  },
  normal: {
    fontSize: 'buttonNormal',
    fontWeight: '700',
    height: 'lg',
    px: 'lg',
  },
  large: {
    fontSize: 'buttonLarge',
    fontWeight: '700',
    height: 'xl',
    px: 'xl',
  },
  none: {},
}

export type SizeVariant = 'xsmall' | 'small' | 'normal' | 'large' | 'none'

interface SizeVariantsProps {
  sizeVariant?: SizeVariant
}

export type BasicButtonProps = BaseFlexProps &
  ButtonRelatedProps &
  SizeVariantsProps

export const BasicButton: React.FC<BasicButtonProps> = styled(Flex).attrs(
  (props: BasicButtonProps) => ({
    as: 'button',
    flexWrap: 'nowrap',
    ...(props.sizeVariant && sizeVariants[props.sizeVariant]
      ? sizeVariants[props.sizeVariant]
      : {}),
    ...props,
  }),
)<BasicButtonProps>`
  ${css({
    fontFamily: 'primary',
    boxShadow: 'primaries.500',
    border: 'primary',
    borderColor: 'normal',
  })};
  cursor: pointer;
  white-space: nowrap;
  box-sizing: border-box;
  ${props =>
      props.outline &&
      css({
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderColor: 'current-color',
        border: 'primary',
      })}
    :focus {
    outline: none;
  }
`
