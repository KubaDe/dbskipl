import React from 'react'

import Box from 'components/simpleUi/Box'

import ExperienceSectionMobile from './ExperienceSection.mobile'
import ExperienceSectionDesktop from './ExperienceSection.desktop'

import experiencesJson from './__data__/experiences.json'
import { Experiences } from './__data__/Experiences'
const experiences = experiencesJson as Experiences

const Section: React.FC = () => {
  return (
    <>
      <Box invisible="<md">
        <ExperienceSectionDesktop experiences={experiences} />
      </Box>
      <Box invisible=">md">
        <ExperienceSectionMobile experiences={experiences} />
      </Box>
    </>
  )
}

export default Section
