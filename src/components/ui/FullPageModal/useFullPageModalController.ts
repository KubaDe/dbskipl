import FullPageModalController from './FullPageModalController'
import { useRef } from 'react'

interface Props {}

const useFullPageModalController = (
  props: Props = {},
): FullPageModalController => {
  const {} = props
  const fullPageModalControllerRef = useRef(new FullPageModalController())
  return fullPageModalControllerRef.current
}

export default useFullPageModalController
