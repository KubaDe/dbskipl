import inject from 'hoc/inject'

import Flex, { FlexItem } from 'components/simpleUi/Flex'
import BgText from 'components/typography/BgText'

const TagList = inject(Flex, {})

export const TagListLabel = inject(FlexItem, {
  width: '200px',
})

export const TagListTags = inject(Flex, {
  flexWrap: 'wrap',
})

export const TagListItem = inject(BgText, {
  padSize: '2xs',
  inverted: true,
  mr: 'sm',
  fontWeight: 600,
})

export default TagList
