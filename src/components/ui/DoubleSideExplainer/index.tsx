import inject from 'hoc/inject'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'
import { H2, H3, H4, H5 } from 'components/typography/Heading'
import BgText  from 'components/typography/BgText'
import Text from 'components/simpleUi/Text'

const DoubleSideExplainer = inject(Flex, {
  flexDirection: { _: 'column', md: 'row' },
})

const explainerItemProps: BaseFlexProps = {
  width: { _: '100%', md: '50%' },
  display: 'flex',
  py: 'md',
  justifyContent: 'center',
  flexDirection: 'column',
}

export const LeftExplainer = inject(Flex, {
  ...explainerItemProps,
  borderRight: { _: 'none', md: 'inverted' },
  alignItems: { _: 'flex-start', md: 'flex-end' },
  textAlign: { _: 'left', md: 'right' },
  pr: { _: 0, md: '3xl' },
})

export const RightExplainer = inject(Flex, {
  ...explainerItemProps,
  alignItems: 'flex-start',
  textAlign: 'left',
  pl: { _: 0, md: '3xl' },
  borderBottom: { _: 'inverted', md: 'none' },
  pb: {_: 'lg', md: 0},
  // mb: {_: 'md', md: 0},
})

export const ExplainerDisplay = inject(H2, {
  fontSize: { _: 'h4', md: 'h3' },
})

export const ExplainerTitle = inject(BgText, {
  fontSize: {_: 'h3', md: 'h5'},
  width: '100%',
  mb: 'xs',
})

export const ExplainerSubtitle = inject(H4, {
  fontSize: 'h5',
  width: '100%',
  mb: {_: 'sm', md: 'lg'},
})

export const ExplainerLabel = inject(BgText, {
  inverted: true,
  fontSize: 'h6',
  textAlign: { _: 'center', md: 'left' },
  mx: 'md'
})

export const ExplainerText = inject(Text, {
  as: 'p',
  fontSize: 'p',
  lineHeight: '1.5em',
})

export default DoubleSideExplainer
