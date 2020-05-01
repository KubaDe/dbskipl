import React, { forwardRef } from 'react'
import inject from 'hoc/inject'
import Flex from 'components/simpleUi/Flex'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

const SectionGrid = inject(Flex, {
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: { _: 'column', md: 'row' },
  height: { _: 'unset', md: '100vh' },
  maxHeight: { _: 'unset', md: '900px' },
  flexWrap: 'nowrap',
  px: { _: 'md', md: '3xl' },
  ml: { _: 0, md: '86px' },
  mx: { _: 'xl', '2xl': '15%' },
})

interface WrapperRelatedProps {
  children: React.ReactNode
}
type WrapperProps = BaseBoxProps & WrapperRelatedProps
const Wrapper: React.FC<WrapperProps> = forwardRef(
  (props: WrapperProps, ref) => {
    const { children, ...rest } = props
    return (
      <Box
        backgroundColor="inverted"
        position="relative"
        overflow="hidden"
        {...rest}
        ref={ref}
      >
        <SectionGrid>{children}</SectionGrid>
      </Box>
    )
  },
)

export default Wrapper
