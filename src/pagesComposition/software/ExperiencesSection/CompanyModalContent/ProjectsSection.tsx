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

import Project from '__data__/project/Project'
import BgTextProps from '../../../../components/typography/BgText'

interface ProjectsSectionRelatedProps {
  project: Project
}

type ProjectsSectionProps = BaseBoxProps & ProjectsSectionRelatedProps

const ProjectsSection: React.FC<ProjectsSectionProps> = (
  props: ProjectsSectionProps,
) => {
  const { project } = props
  return (
    <Box as="section" py={{ _: 0, md: 'xl' }}>
      <DoubleSideExplainer>
        <LeftExplainer>
          <ExplainerTitle fontSize='h3'>{project.title}</ExplainerTitle>
          <ExplainerSubtitle>{project.role}</ExplainerSubtitle>
          <Box mb="xs">{project.country}</Box>
          <ExplainerLabel>{project.type}</ExplainerLabel>
        </LeftExplainer>
        <RightExplainer>
          <ExplainerSubtitle>{project.description}</ExplainerSubtitle>

          <TagList>
            <TagListLabel>Features: </TagListLabel>
            <TagListTags>
              {project.features.split(',').map(feature => (
                <TagListItem>{feature}</TagListItem>
              ))}
            </TagListTags>
          </TagList>
          <TagList mt='md'>
            <TagListLabel>Technologies: </TagListLabel>
            <TagListTags>
              {project.techStack.split(',').map(feature => (
                <TagListItem>{feature}</TagListItem>
              ))}
            </TagListTags>
          </TagList>
        </RightExplainer>
      </DoubleSideExplainer>
    </Box>
  )
}

export default ProjectsSection
