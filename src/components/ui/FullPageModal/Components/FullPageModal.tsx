import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLockBodyScroll } from 'react-use'

import { BaseBoxProps } from 'components/simpleUi/Box'

import IntroMotion from './Intro.motion'
import ModalMotion from './Modal.motion'
import Content from './Content.motion'
import useModalAnimations from './useModalAnimations'

import FullPageModalController from '../FullPageModalController'
import useFullPageModalLogic from '../useFullPageModalLogic'

export interface FullPageModalRelatedProps {
  fullPageModalController: FullPageModalController
  children: React.ReactNode
}

export type FullPageModalProps = BaseBoxProps & FullPageModalRelatedProps
const FullPageModal: React.FC<FullPageModalProps> = (
  props: FullPageModalProps,
) => {
  const { fullPageModalController, children } = props
  const { isOpen, triggerPoint } = useFullPageModalLogic({
    fullPageModalController,
  })
  const {
    contentAnimation,
    modalAnimation,
    introAnimation,
  } = useModalAnimations(isOpen, {
    onOpenEnd: fullPageModalController.openEnd
  })
  useLockBodyScroll(isOpen)
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalMotion
          key="modal"
          animate={modalAnimation}
          initial="initial"
          exit="initial"
          position="fixed"
          top={0}
          left={0}
          height="100%"
          width="100%"
          zIndex={{ md: 99, _: 101 }}
        >
          <IntroMotion
            key="modal-intro"
            animate={introAnimation}
            initial="initial"
            exit="initial"
            triggerPoint={triggerPoint}
            backgroundColor="black"
            position="absolute"
            top={0}
            left={0}
            borderRadius="50%"
          />
          <Content
            key="modal-content"
            animate={contentAnimation}
            initial="initial"
            exit="initial"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            backgroundColor="black"
          >
            {children}
          </Content>
        </ModalMotion>
      )}
    </AnimatePresence>
  )
}

export default FullPageModal
