import { RefObject, useEffect, useState } from 'react'
import throttle from 'lodash/throttle'

export interface EffectArgs {
  x: number
  y: number
}

const useDebouncedScrollEffect = (
  ref: RefObject<HTMLElement> | null,
  effect: ({ x, y }: EffectArgs) => void,
  time: number,
): void => {

  useEffect(() => {
    const handler = () => {
      if (ref && ref.current) {
        effect({
          x: ref.current.scrollLeft,
          y: ref.current.scrollTop,
        })
      }
    }

    const debouncedHandler = throttle(handler, time)

    if (ref && ref.current) {
      ref.current.addEventListener('scroll', debouncedHandler, {
        capture: false,
        passive: true,
      })
    }

    return () => {
      if (ref && ref.current) {
        ref.current.removeEventListener('scroll', debouncedHandler)
      }
    }
  }, [ref])
}

export default useDebouncedScrollEffect
