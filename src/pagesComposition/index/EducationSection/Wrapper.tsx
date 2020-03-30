import React from 'react'
import inject from 'hoc/inject'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const SectionLayout = inject(Box, {
  borderTop: 'primary',
  minHeight: { _: 'unset', md: '140vh', '2xl': '100vh' },
  backgroundColor: 'inverted',
  position: 'relative',
})

const SectionContent = inject(Box, {
  minHeight: { _: 'calc(100vh - 76px)' },
  mt: { _: '76px', md: 0 },
  px: { _: 'md', md: '3xl' },
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
      <SectionContent>{children}</SectionContent>
    </SectionLayout>
  )
}

export default Wrapper
