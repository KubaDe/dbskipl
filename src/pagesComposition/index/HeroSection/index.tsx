import React, { useEffect } from 'react'

import {
  SectionContent,
  SectionLayout,
} from 'components/layout/buildingBlocks/SectionContent'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'


const Section: React.FC = () => {
  const { setIsInverted } = useMenuBarController()
  useEffect(() => {
    setIsInverted(true)
  }, [setIsInverted])

  return (
    <>
      <SectionLayout backgroundColor="black">
        <SectionContent
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          pt={{ _: '86px', md: '0' }}
        >
       asdsad
        </SectionContent>
      </SectionLayout>
    </>
  )
}

export default Section
