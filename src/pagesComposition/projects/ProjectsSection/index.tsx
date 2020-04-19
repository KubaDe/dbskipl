import React, { useEffect } from 'react'
import reverse from 'lodash/reverse'

import Flex from 'components/simpleUi/Flex'
import {
  SectionContent,
  SectionLayout,
} from 'components/layout/buildingBlocks/SectionContent'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'

import Heading from './Heading.motion'
import ProjectWidget from './ProjectWidget'

import projects from '__data__/project/projects'

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
        >
          <Heading>Corporate Projects</Heading>
          <Flex
            flexDirection="column"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            {reverse(projects)
              .reverse()
              .filter(project => project.companySlug !== 'freelance')
              .map(project => (
                <ProjectWidget project={project} key={project.slug} />
              ))}
          </Flex>
          <Heading my="3xl">Freelance Projects</Heading>
          <Flex
            flexDirection="column"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            {reverse(projects)
              .filter(project => project.companySlug === 'freelance')
              .map(project => (
                <ProjectWidget project={project} key={project.slug} />
              ))}
          </Flex>
        </SectionContent>
      </SectionLayout>
    </>
  )
}

export default Section
