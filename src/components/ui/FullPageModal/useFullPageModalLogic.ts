import FullPageModalController, {
  CloseObserver,
  OpenObserver,
} from './FullPageModalController'

import { useCallback, useEffect, useState } from 'react'

interface Props {
  fullPageModalController: FullPageModalController
}

export interface TriggerPoint {
  x: number
  y: number
}

interface FullPageModalLogic {
  isOpen: boolean
  triggerPoint: TriggerPoint
}

const useFullPageModalLogic = (props: Props): FullPageModalLogic => {
  const { fullPageModalController } = props
  const [isOpen, setIsOpen] = useState(false)
  const [triggerPoint, setTriggerPoint] = useState({ x: 0, y: 0 })
  const open = useCallback<OpenObserver>(e => {
    setIsOpen(true)
    setTriggerPoint(e.triggerPoint)
  }, [])
  const close = useCallback<CloseObserver>(() => setIsOpen(false), [])
  useEffect(() => {
    fullPageModalController.subscribe<OpenObserver>('open', open)
    fullPageModalController.subscribe<CloseObserver>('close', close)
    return () => {
      fullPageModalController.unsubscribe('open', open)
      fullPageModalController.unsubscribe('close', close)
    }
  }, [close, fullPageModalController, open])
  return {
    isOpen,
    triggerPoint,
  }
}

export default useFullPageModalLogic
