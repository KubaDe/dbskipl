import { RefObject, useEffect, useState } from 'react'
import debounce from 'lodash/debounce'

export interface State {
  x: number
  y: number
}

const useDebouncedScroll = (
  ref: RefObject<HTMLElement>,
  time: number,
): State => {
  const [state, setState] = useState<State>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const element = ref.current
    const handler = () => {
      if (element) {
        setState({
          x: element.scrollLeft,
          y: element.scrollTop,
        })
      }
    }

    const debouncedHandler = debounce(handler, time)

    if (element) {
      element.addEventListener('scroll', debouncedHandler, {
        capture: false,
        passive: true,
      })
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', debouncedHandler)
      }
    }
  }, [ref, time])

  return state
}

export default useDebouncedScroll
