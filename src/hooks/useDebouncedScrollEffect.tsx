import { useEffect } from 'react'
import throttle from 'lodash/throttle'

export interface EffectArgs {
  x: number
  y: number
}

// Todo: refactor to singleton
const useDebouncedScrollEffect = (
  effect: ({ x, y }: EffectArgs) => void,
  time: number,
): void => {

  useEffect(() => {
    const handler = () => {
      effect({
        x: window.scrollX,
        y: window.scrollY,
      })
    }

    const debouncedHandler = throttle(handler, time)

    if (typeof window === 'object') {
      document.addEventListener('scroll', debouncedHandler, {
        capture: false,
        passive: true,
      })
    }

    return () => {
      if (typeof window === 'object') {
        document.removeEventListener('scroll', debouncedHandler)
      }
    }
  }, [effect])
}

export default useDebouncedScrollEffect
