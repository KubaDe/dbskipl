import React, { useState } from 'react'
import Observer from '@researchgate/react-intersection-observer'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

interface BubbleWrapperRelatedProps {
  children: (props: { isOpen: boolean }) => React.ReactNode
}

export type BubbleWrapperProps = BubbleWrapperRelatedProps & BaseBoxProps

const BubbleWrapper: React.FC<BubbleWrapperProps> = (
  props: BubbleWrapperProps,
) => {
  const { children, ...rest } = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Observer
      onChange={e => setIsOpen(e.isIntersecting)}
      rootMargin={'-50% 0% -50% 0%'}
    >
      <Box {...rest}>{children({ isOpen })}</Box>
    </Observer>
  )
}

export default BubbleWrapper
