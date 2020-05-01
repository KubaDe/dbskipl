import React from 'react'

import { H1 } from 'components/typography/Heading'
import BgText from 'components/typography/BgText'

import CompanyModalContentWrapper from './CompanyModalContentWrapper'
import InformationSection from './InformationSection'
import ProjectsSection from './ProjectsSection'

import { Company } from '__data__/company/List'

interface CompanyModalContentRelatedProps {
  close: () => void
  experience: Company
}
type CompanyModalContentProps = CompanyModalContentRelatedProps
const CompanyModalContent: React.FC<CompanyModalContentProps> = (
  props: CompanyModalContentProps,
) => {
  const { close, experience } = props
  return (
    <CompanyModalContentWrapper close={close}>
      <H1 fontSize={{ _: 'h2', md: 'h1' }}>{experience.title}</H1>
      <InformationSection experience={experience} />
      <H1
        fontSize={{ _: 'h2', md: 'h2' }}
        textAlign={{ _: 'center', md: 'left' }}
        pb="lg"
      >
        <BgText as="span" padSize="sm" mx="sm" inverted>
          Projects
        </BgText>
      </H1>
      <hr />
      <ProjectsSection />
      <ProjectsSection />
      <ProjectsSection />
      <ProjectsSection />
    </CompanyModalContentWrapper>
  )
}

export default CompanyModalContent
