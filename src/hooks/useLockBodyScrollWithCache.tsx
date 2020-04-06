import { useEffect, useState } from 'react'

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
  let position = 0
  if (typeof window === 'object') {
    position = window.scrollY
  }

  useEffect(() => {
    if (isLocked) {
      setTimeout(() => setLockBody(true), 1000)
      setLockedPosition(position)
    } else {
      if (typeof window === 'object') {
        setLockBody(false)
        setTimeout(() => window.scrollTo(0, lockedPosition))
      }
    }
  }, [isLocked])
}

export default useLockBodyScrollWithCache
