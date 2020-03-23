import Text from 'components/simpleUi/Text'

import inject from 'hoc/inject'

const TechBadge = inject(Text, {
  as: 'span',
  border: 'primary',
  boxShadow: 'primaries.300',
  m: 'xs',
  px: 'md',
  py: '3xs',
})

export default TechBadge
