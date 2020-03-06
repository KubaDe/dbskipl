import React from 'react'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

import DoubleSideExplainer, {
  LeftExplainer,
  RightExplainer,
  ExplainerTitle,
  ExplainerSubtitle,
  ExplainerLabel,
} from 'components/ui/DoubleSideExplainer'

import TagList, {
  TagListItem,
  TagListLabel,
  TagListTags,
} from 'components/ui/TagList'

interface ProjectsSectionRelatedProps {}

type ProjectsSectionProps = BaseBoxProps & ProjectsSectionRelatedProps

const ProjectsSection: React.FC<ProjectsSectionProps> = (
  props: ProjectsSectionProps,
) => {
  return (
    <Box as="section" py="xl">
      <DoubleSideExplainer>
        <LeftExplainer>
          <ExplainerTitle>Booking service for transfer agent</ExplainerTitle>
          <ExplainerSubtitle>
            One-person frontend development team
          </ExplainerSubtitle>
          <ExplainerLabel>Frontend of booking service SPA</ExplainerLabel>
        </LeftExplainer>
        <RightExplainer>
          <ExplainerSubtitle>
            Implementation of a web service with white-label features
          </ExplainerSubtitle>
          <TagList>
            <TagListLabel>Country: </TagListLabel>
            <TagListTags>
              <TagListItem>Developing web</TagListItem>
              <TagListItem>applications</TagListItem>
              <TagListItem>for small and</TagListItem>
              <TagListItem>companies</TagListItem>
              <TagListItem>Developing</TagListItem>
              <TagListItem>web applications</TagListItem>
              <TagListItem>companies</TagListItem>
              <TagListItem>web applications</TagListItem>
              <TagListItem>for small and</TagListItem>
            </TagListTags>
          </TagList>
        </RightExplainer>
      </DoubleSideExplainer>
    </Box>
  )
}

export default ProjectsSection
