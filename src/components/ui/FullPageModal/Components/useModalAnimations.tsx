import { AnimationControls, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

interface ModalAnimations {
  modalAnimation: AnimationControls
  contentAnimation: AnimationControls
  introAnimation: AnimationControls
}

const useModalAnimations = (isOpen: boolean): ModalAnimations => {
  const modalAnimation = useAnimation()
  const contentAnimation = useAnimation()
  const introAnimation = useAnimation()
  useEffect(() => {
    const flowOpen = async () => {
      await introAnimation.start('active')
      await modalAnimation.start('active')
      await contentAnimation.start('active')
      await introAnimation.start('initial')
    }
    if (isOpen) {
      flowOpen()
    }
  }, [contentAnimation, introAnimation, isOpen, modalAnimation])
  return {
    modalAnimation,
    contentAnimation,
    introAnimation,
  }
}

export default useModalAnimations
