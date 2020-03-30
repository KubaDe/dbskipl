import React from 'react'
import inject from 'hoc/inject'
import Flex from 'components/simpleUi/Flex'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const SectionLayout = inject(Box, {
  backgroundColor: 'inverted',
  position: 'relative',
})

const SectionGrid = inject(Flex, {
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: { _: 'column', md: 'row' },
  height: { _: 'calc(100vh - 76px)', md: '100vh' },
  maxHeight: '900px',
  flexWrap: 'nowrap',
  mt: { _: '76px', md: 0 },
  px: { _: 'md', md: '3xl' },
  ml: { _: 0, md: '86px' },
  mx: { _: 0, '2xl': '15%' },
})

interface WrapperRelatedProps {
  children: React.ReactNode
}
type WrapperProps = BaseBoxProps & WrapperRelatedProps
const Wrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
  const { children, ...rest } = props
  return (
    <SectionLayout {...rest}>
      <SectionGrid>{children}</SectionGrid>
    </SectionLayout>
  )
}

export default Wrapper
