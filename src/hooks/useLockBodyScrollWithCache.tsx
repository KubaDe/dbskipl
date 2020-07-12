import { useLayoutEffect, useRef, useState } from 'react';

const setLockBody = (value: boolean): void => {
  if (typeof window !== 'object') {
    return
  }
  const body = document.getElementsByTagName('body')[0]
  if (value && !body.classList.contains('locked')) {
    body.classList.add('locked')
  } else {
    body.classList.remove('locked')
  }
}

const useLockBodyScrollWithCache = (isLocked: boolean) => {
  const [lockedPosition, setLockedPosition] = useState(0)
  let position = useRef(0)
  if (typeof window === 'object' && window.scrollY) {
    position.current = window.scrollY
  }

  useLayoutEffect(() => {
    if (isLocked) {
      setTimeout(() => setLockBody(true), 1000)
      setLockedPosition(position.current)
    } else {
      if (typeof window === 'object') {
        setLockBody(false)
        setTimeout(() => lockedPosition && window.scrollTo(0, lockedPosition))
      }
    }
  }, [isLocked, lockedPosition, position])
}

export default useLockBodyScrollWithCache
