import React, { useCallback, ChangeEvent, useEffect } from 'react'

import Box from 'components/simpleUi/Box'

import {
  FullPageModal,
  useFullPageModalController,
} from 'components/ui/FullPageModal'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'
import FullPageModalController from 'components/ui/FullPageModal/FullPageModalController';

import ExperienceSectionMobile from './ExperienceSection.mobile'
import ExperienceSectionDesktop from './ExperienceSection.desktop'
import CompanyModalContent from './CompanyModalContent'

import experiencesJson from './__data__/experiences.json'
import { Experiences } from './__data__/Experiences'
const experiences = experiencesJson as Experiences


interface useMenuBarModalEffectsProps {
  fullPageModalController: FullPageModalController
}
const useMenuBarModalEffects = (props: useMenuBarModalEffectsProps) => {
  const {fullPageModalController} = props
  const { setIsInvertedFalse, setIsInvertedTrue } = useMenuBarController()
  useEffect(() => {
    fullPageModalController.subscribe('openEnd', setIsInvertedTrue)
    fullPageModalController.subscribe('close', setIsInvertedFalse)
    return () => {
      fullPageModalController.unsubscribe('openEnd', setIsInvertedTrue)
      fullPageModalController.unsubscribe('close', setIsInvertedFalse)
    }
  }, [fullPageModalController, setIsInvertedFalse, setIsInvertedTrue])
}

const Section: React.FC = () => {
  const fullPageModalController = useFullPageModalController()
  useMenuBarModalEffects({fullPageModalController})

  const onBubbleClick = useCallback(
    (e: ChangeEvent<HTMLAnchorElement> & MouseEvent) => {
      fullPageModalController.open({
        triggerPoint: {
          x: e.clientX,
          y: e.clientY,
        },
      })
    },
    [fullPageModalController],
  )

  return (
    <>
      <Box invisible="<md">
        <ExperienceSectionDesktop
          experiences={experiences}
          onBubbleClick={onBubbleClick}
        />
      </Box>
      <Box invisible=">md">
        <ExperienceSectionMobile
          experiences={experiences}
          onBubbleClick={onBubbleClick}
        />
      </Box>
      <FullPageModal fullPageModalController={fullPageModalController}>
        <CompanyModalContent close={fullPageModalController.close} />
      </FullPageModal>
    </>
  )
}

export default Section
