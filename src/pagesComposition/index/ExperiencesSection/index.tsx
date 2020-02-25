import React from 'react'

import Box from 'components/simpleUi/Box'

import ExperienceSectionDesktop from './ExperienceSection.desktop'

import experiencesJson from './__data__/experiences.json'
import { Experiences } from './__data__/Experiences'
const experiences = experiencesJson as Experiences

const Section: React.FC = () => {
  return (
    <>
      <Box>
        <ExperienceSectionDesktop experiences={experiences}/>
      </Box>
    </>
  )
}

export default Section
