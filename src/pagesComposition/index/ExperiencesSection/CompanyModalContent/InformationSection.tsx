import React from 'react'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

import DoubleSideExplainer, {
  LeftExplainer,
  RightExplainer,
  ExplainerDisplay,
  ExplainerTitle,
  ExplainerText,
} from 'components/ui/DoubleSideExplainer'

import { Experience } from '../__data__/Experiences'

interface InformationSectionRelatedProps {
  experience: Experience
}
type InformationSectionProps = BaseBoxProps & InformationSectionRelatedProps
const InformationSection: React.FC<InformationSectionProps> = (
  props: InformationSectionProps,
) => {
  const { experience } = props
  return (
    <Box as="section" py="xl">
      <DoubleSideExplainer>
        <LeftExplainer>
          <ExplainerDisplay>{experience.start} – {experience.end}</ExplainerDisplay>
        </LeftExplainer>
        <RightExplainer>
          <ExplainerTitle mb="md">
            JavaScript developer at Ideamotive in Warsaw
          </ExplainerTitle>
          <ExplainerText>
            Developing web applications for small and medium companies from
            Poland, Germany, UK and Singapore <br />
            Working mainly on React + Redux + […] technology stack
          </ExplainerText>
        </RightExplainer>
      </DoubleSideExplainer>
    </Box>
  )
}

export default InformationSection
