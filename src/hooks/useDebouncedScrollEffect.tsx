import { RefObject, useEffect, useState } from 'react'
import debounce from 'lodash/debounce'

export interface EffectArgs {
  x: number
  y: number
}

const useDebouncedScrollEffect = (
  ref: RefObject<HTMLElement>,
  effect: ({ x, y }: EffectArgs) => void,
  time: number,
): void => {

  useEffect(() => {
    const handler = () => {
      if (ref.current) {
        effect({
          x: ref.current.scrollLeft,
          y: ref.current.scrollTop,
        })
      }
    }

    const debouncedHandler = debounce(handler, time)

    if (ref.current) {
      ref.current.addEventListener('scroll', debouncedHandler, {
        capture: false,
        passive: true,
      })
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', debouncedHandler)
      }
    }
  }, [ref])
}

export default useDebouncedScrollEffect
