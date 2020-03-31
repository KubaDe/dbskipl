import { RefObject, useEffect } from 'react'
import { useIntersection } from 'react-use'

const useColumnMouseHover = (props: {
  ref: RefObject<HTMLElement>
  onHover?: () => void
}) => {
  const { ref, onHover } = props

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  useEffect(() => {
    if (intersection) {
      const x2 = intersection.boundingClientRect.right
      const x1 = x2 - intersection.boundingClientRect.width
      const listener = (e: MouseEvent) => {
        if (e.clientX > x1 && e.clientX < x2) {
          onHover && onHover()
        }
      }
      window.addEventListener('mousemove', listener)
      return () => {
        window.removeEventListener('mousemove', listener)
      }
    }
  }, [intersection, onHover])
}

export default useColumnMouseHover
