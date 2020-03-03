import React, { useCallback, ChangeEvent, useEffect } from 'react'

import Box from 'components/simpleUi/Box'

import {
  FullPageModal,
  useFullPageModalController,
} from 'components/ui/FullPageModal'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'

import ExperienceSectionMobile from './ExperienceSection.mobile'
import ExperienceSectionDesktop from './ExperienceSection.desktop'
import CompanyModalContent from './CompanyModalContent'

import experiencesJson from './__data__/experiences.json'
import { Experiences } from './__data__/Experiences'
const experiences = experiencesJson as Experiences

const Section: React.FC = () => {
  const fullPageModalController = useFullPageModalController()
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

  const { setIsInverted } = useMenuBarController()

  useEffect(() => {
    fullPageModalController.subscribe('openEnd', () => setIsInverted(true))
    fullPageModalController.subscribe('close', () => setIsInverted(false))
  }, [fullPageModalController, setIsInverted])

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
