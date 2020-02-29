import React from 'react'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

import useElementScrollProgress, {
  Observer,
} from 'hooks/useElementScrollProgress'

interface BlockRelatedProps {
  onProgressChange?: (percent: number) => void
}

export type BlockProps = BaseBoxProps & BlockRelatedProps

const Block: React.FC<BlockProps> = ({
  children,
  onProgressChange = () => {},
  ...props
}) => {
  const { observerChange, scrollElementRef } = useElementScrollProgress({
    onProgressChange,
  })
  return (
    <Observer onChange={observerChange} threshold={0}>
      <Box {...props} ref={scrollElementRef}>
        {children}
      </Box>
    </Observer>
  )
}

export default Block
