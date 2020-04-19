import inject from 'hoc/inject'
import Flex from 'components/simpleUi/Flex'

export const SectionLayout = inject(Flex, {
  backgroundColor: 'primary',
  position: 'relative',
  borderTop: 'primary',
  flexDirection: 'row',
})

export const SectionContent = inject(Flex, {
  width: '100%',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: { _: 'column', md: 'row' },
  flexWrap: 'nowrap',
  px: { _: 'md', md: 'lg', lg: '3xl' },
  ml: { _: 0, md: '86px' },
})
