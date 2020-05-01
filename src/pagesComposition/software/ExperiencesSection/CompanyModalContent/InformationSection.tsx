import React from 'react'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

import DoubleSideExplainer, {
  LeftExplainer,
  RightExplainer,
  ExplainerDisplay,
  ExplainerTitle,
  ExplainerText,
} from 'components/ui/DoubleSideExplainer'

import { Company } from '__data__/company/List'

interface InformationSectionRelatedProps {
  experience: Company
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
          <ExplainerDisplay>
            {experience.start} – {experience.end}
          </ExplainerDisplay>
        </LeftExplainer>
        <RightExplainer>
          <ExplainerTitle mb="md">{experience.jobTitle}</ExplainerTitle>
          <ExplainerText>{experience.jobDescription}</ExplainerText>
        </RightExplainer>
      </DoubleSideExplainer>
    </Box>
  )
}

export default InformationSection
