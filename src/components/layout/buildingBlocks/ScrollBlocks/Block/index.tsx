import React, { useCallback, useRef, useState } from 'react'
import get from 'lodash/get'
import Observer from '@researchgate/react-intersection-observer'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'
import useDebouncedScrollEffect, {
  EffectArgs,
} from 'hooks/useDebouncedScrollEffect'

interface BlockRelatedProps {
  onProgressChange?: (percent: number) => void
}

export type BlockProps = BaseBoxProps & BlockRelatedProps

const Block: React.FC<BlockProps> = ({
  children,
  onProgressChange = () => {},
  ...props
}) => {
  const sectionRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  const countProgress = useCallback(
    (e: EffectArgs) => {
      if (isIntersecting && sectionRef) {
        const viewportBottomPosition = e.y + window.innerHeight
        const topOfComponent = get(sectionRef, 'current.offsetTop', 0)
        const bottomOfComponent =
          topOfComponent + get(sectionRef, 'current.offsetHeight', 0)
        const progress =
          (viewportBottomPosition - topOfComponent) /
          (bottomOfComponent - topOfComponent)
        onProgressChange(progress)
      }
    },
    [isIntersecting, sectionRef],
  )

  useDebouncedScrollEffect(countProgress, 10)

  const observerChange = useCallback((e: IntersectionObserverEntry) => {
    setIsIntersecting(e.isIntersecting)
  }, [])
  return (
    <Observer onChange={observerChange} threshold={0}>
      <Box {...props} ref={sectionRef}>
        {children}
      </Box>
    </Observer>
  )
}

export default Block
