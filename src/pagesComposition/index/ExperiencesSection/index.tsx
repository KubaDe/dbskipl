import React, { useCallback, ChangeEvent, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import Box from 'components/simpleUi/Box'

import {
  FullPageModal,
  useFullPageModalController,
} from 'components/ui/FullPageModal'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'
import FullPageModalController from 'components/ui/FullPageModal/FullPageModalController'

import ExperienceSectionMobile from './ExperienceSection.mobile'
import ExperienceSectionDesktop from './ExperienceSection.desktop'
import CompanyModalContent from './CompanyModalContent'

import experiencesJson from '__data__/company/list.json'
import { Company, CompanyList } from '__data__/company/List.js'
const experiences = (experiencesJson as CompanyList).companies

interface useMenuBarModalEffectsProps {
  fullPageModalController: FullPageModalController
}
const useMenuBarModalEffects = (props: useMenuBarModalEffectsProps) => {
  const { fullPageModalController } = props
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

const useCurrentExperience = (): Company | null => {
  const router = useRouter()
  const currentExperience: Company | null = useMemo(() => {
    if (router.query?.company) {
      const experience = experiences.find(
        experience => experience.slug === router.query.company,
      )
      return experience || null
    } else {
      return null
    }
  }, [router.query])
  return currentExperience
}

const Section: React.FC = () => {
  const fullPageModalController = useFullPageModalController()
  useMenuBarModalEffects({ fullPageModalController })

  const currentExperience = useCurrentExperience()

  useEffect(() => {
    if (currentExperience) {
      fullPageModalController.open({
        triggerPoint: {
          x: 0,
          y: 0,
        },
      })
    }
  }, [])

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
      <Box invisible="<lg">
        <ExperienceSectionDesktop
          experiences={experiences}
          onBubbleClick={onBubbleClick}
        />
      </Box>
      <Box invisible=">lg">
        <ExperienceSectionMobile
          experiences={experiences}
          onBubbleClick={onBubbleClick}
        />
      </Box>
      <FullPageModal fullPageModalController={fullPageModalController}>
        {currentExperience && (
          <CompanyModalContent
            close={fullPageModalController.close}
            experience={currentExperience}
          />
        )}
      </FullPageModal>
    </>
  )
}

export default Section
