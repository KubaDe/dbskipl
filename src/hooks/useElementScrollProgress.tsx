import { RefObject, useCallback, useRef, useState } from 'react'
import get from 'lodash/get'
import Observer from '@researchgate/react-intersection-observer'

import useDebouncedScrollEffect, {
  EffectArgs,
} from './useDebouncedScrollEffect'

interface ElementScrollProgress {
  observerChange: (e: IntersectionObserverEntry) => void
  scrollElementRef: RefObject<HTMLElement> | null
}

const useElementScrollProgress = (props: {
  onProgressChange: (progress: number) => void
}): ElementScrollProgress => {
  const { onProgressChange } = props
  const scrollElementRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const countProgress = useCallback(
    (e: EffectArgs) => {
      if (isIntersecting && scrollElementRef) {
        const viewportBottomPosition = e.y + window.innerHeight
        const topOfComponent = get(scrollElementRef, 'current.offsetTop', 0)
        const bottomOfComponent =
          topOfComponent + get(scrollElementRef, 'current.offsetHeight', 0)
        const progress =
          (viewportBottomPosition - topOfComponent) /
          (bottomOfComponent - topOfComponent)
        onProgressChange(progress)
      }
    },
    [isIntersecting, onProgressChange],
  )
  useDebouncedScrollEffect(countProgress, 10)

  const observerChange = useCallback((e: IntersectionObserverEntry) => {
    setIsIntersecting(e.isIntersecting)
  }, [])

  return {
    observerChange,
    scrollElementRef,
  }
}

export default useElementScrollProgress
export { Observer }
