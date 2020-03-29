import { useCallback, useEffect, useMemo, useState } from 'react'
import throttle from 'lodash/throttle'

type Callback = (isScrolling: boolean) => void
export const useIsScrollingCb = (callback: Callback): void => {
  const setScrollingUnthrottled = useCallback(
    value => {
      callback && callback(value)
    },
    [callback],
  )

  const setScrolling = useMemo(() => throttle(setScrollingUnthrottled, 200), [
    setScrollingUnthrottled,
  ])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let scrollingTimeout = 0

      const handleScrollEnd = () => {
        setScrolling(false)
      }

      const handleScroll = () => {
        setScrolling(true)
        clearTimeout(scrollingTimeout)
        scrollingTimeout = setTimeout(() => handleScrollEnd(), 150)
      }

      window.addEventListener('scroll', handleScroll, false)
      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('scroll', handleScroll, false)
        }
      }
    }
    return () => {}
  }, [setScrolling])
}

const useIsScrolling = (): boolean => {
  const [scrollingValue, setScrollingValue] = useState(false)
  useIsScrollingCb(setScrollingValue)
  return scrollingValue
}

export default useIsScrolling
