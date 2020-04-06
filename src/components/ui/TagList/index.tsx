import inject from 'hoc/inject'

import Flex, { FlexItem } from 'components/simpleUi/Flex'
import BgText from 'components/typography/BgText'

const TagList = inject(Flex, {
  flexDirection: { _: 'column', md: 'row' },
})

export const TagListLabel = inject(FlexItem, {
  width: '200px',
  my: { _: 'md', md: '0' },
})

export const TagListTags = inject(Flex, {
  flexWrap: 'wrap',
  justifyContent: { _: 'center', md: 'flex-start' },
})

export const TagListItem = inject(BgText, {
  padSize: '2xs',
  inverted: true,
  mr: 'sm',
  mb: '2xs',
  fontWeight: 600,
})

export default TagList
