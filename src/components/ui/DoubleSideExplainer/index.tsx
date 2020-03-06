import inject from 'hoc/inject'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'
import { H2, H3, H4, H5 } from 'components/typography/Heading'
import Text from 'components/simpleUi/Text'

const DoubleSideExplainer = inject(Flex, {})

const explainerItemProps: BaseFlexProps = {
  width: '50%',
  display: 'flex',
  py: 'md',
  justifyContent: 'center',
  flexDirection: 'column',
}

export const LeftExplainer = inject(Flex, {
  ...explainerItemProps,
  borderRight: 'inverted',
  alignItems: 'flex-end',
  pr: '3xl',
})

export const RightExplainer = inject(Flex, {
  ...explainerItemProps,
  alignItems: 'flex-start',
  pl: '3xl',
})

export const ExplainerDisplay = inject(H2, {
  fontSize: 'h3',
})

export const ExplainerTitle = inject(H3, {
  fontSize: 'h4',
  mb: 'xs',
})

export const ExplainerSubtitle = inject(H4, {
  fontSize: 'h5',
  mb: 'lg',
})

export const ExplainerLabel = inject(H5, {
  fontSize: 'h6',
})

export const ExplainerText = inject(Text, {
  as: 'p',
  fontSize: 'p',
  lineHeight: '1.5em',
})

export default DoubleSideExplainer
