import React from 'react'

import { H1 } from 'components/typography/Heading'
import BgText from 'components/typography/BgText'

import CompanyModalContentWrapper from './CompanyModalContentWrapper'
import InformationSection from './InformationSection'
import ProjectsSection from './ProjectsSection'

interface CompanyModalContentRelatedProps {
  close: () => void
}
type CompanyModalContentProps = CompanyModalContentRelatedProps
const CompanyModalContent: React.FC<CompanyModalContentProps> = (
  props: CompanyModalContentProps,
) => {
  const { close } = props
  return (
    <CompanyModalContentWrapper close={close}>
      <H1 fontSize={{ _: 'h2', md: 'h1' }}>Ideamotive</H1>
      <InformationSection />
      <H1 fontSize={{ _: 'h2', md: 'h2' }} textAlign={{_: 'center', md: 'left'}} pb='lg'>
        <BgText as="span" padSize="sm" mx="sm" inverted>
          Projects
        </BgText>
      </H1>
      <hr/>
      <ProjectsSection />
      <ProjectsSection />
      <ProjectsSection />
      <ProjectsSection />
    </CompanyModalContentWrapper>
  )
}

export default CompanyModalContent
