import React from 'react'
import inject from 'hoc/inject'
import Flex from 'components/simpleUi/Flex'
import { BaseBoxProps } from 'components/simpleUi/Box'

const SectionLayout = inject(Flex, {
  minHeight: { _: '100vh', md: '100vh' },
  backgroundColor: 'black',
  position: 'relative',
  borderTop: 'primary',
  flexDirection: 'row',
})

const SectionGrid = inject(Flex, {
  width: '100%',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: { _: 'column', md: 'row' },
  flexWrap: 'nowrap',
  px: { _: 'md', md: '3xl', '2xl': '20%' },
  ml: { _: 0, md: '86px' },
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
