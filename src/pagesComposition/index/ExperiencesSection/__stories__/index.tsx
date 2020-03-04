import React, { useEffect } from 'react'

import { ScrollSpine } from 'components/layout/buildingBlocks/ScrollBlocks'
import Layout from 'components/layout/Layout'
import {
  FullPageModal,
  useFullPageModalController,
} from 'components/ui/FullPageModal'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'

import CompanyModalContent from '../CompanyModalContent'
import ExperienceSection from '../'

import experiencesJson from '../__data__/experiences.json'
import { Experiences } from '../__data__/Experiences'

export default {
  title: 'Pages|Index.ExperienceSection',
}

export const section = () => (
  <Layout>
    <ScrollSpine>
      <ExperienceSection />
    </ScrollSpine>
  </Layout>
)

const Modal = () => {
  const fullPageModalController = useFullPageModalController()
  const { setIsInvertedTrue } = useMenuBarController()

  useEffect(() => {
    setIsInvertedTrue()
    fullPageModalController.open({
      triggerPoint: {
        x: 100,
        y: 100,
      },
    })
  }, [])

  return (
    <FullPageModal fullPageModalController={fullPageModalController}>
      <CompanyModalContent close={() => {}} />
    </FullPageModal>
  )
}

export const modal = () => {
  return (
    <Layout>
      <ScrollSpine>
        <Modal />
      </ScrollSpine>
    </Layout>
  )
}
