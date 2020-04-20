import styled from 'styled-components'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

interface IconRelatedProps {
  icon: string
}

type IconProps = BaseBoxProps & IconRelatedProps

const Icon = styled(Box).attrs({
  backgroundColor: 'inverted',
})<IconProps>`
  mask-image: url(${props => props.icon});
  mask-size: cover;
`

export default Icon
