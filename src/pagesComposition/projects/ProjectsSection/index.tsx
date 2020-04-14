import React, { useEffect } from 'react'

import {
  SectionContent,
  SectionLayout,
} from 'components/layout/buildingBlocks/SectionContent'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'

import Heading from './Heading.motion'

const Section: React.FC = () => {
  const { setIsInverted } = useMenuBarController()
  useEffect(() => {
    setIsInverted(true)
  }, [])

  return (
    <>
      <SectionLayout backgroundColor="black">
        <SectionContent alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
          <Heading>Projects</Heading>
        </SectionContent>
      </SectionLayout>
    </>
  )
}

export default Section
