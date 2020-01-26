import { useEffect, RefObject } from 'react'

const useOutsideClick = (
  ref: RefObject<HTMLElement> | null,
  callback: () => void,
) => {
  const handleClick = (e: MouseEvent) => {
    if (e.target instanceof Node && ref) {
      if (ref.current && e.target && !ref.current.contains(e.target)) {
        callback()
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default useOutsideClick
