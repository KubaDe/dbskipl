import React, { useState } from 'react'
import inject from 'hoc/inject'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'
import Grid from 'components/simpleUi/Grid'
import Text from 'components/simpleUi/Text'
import Heading from 'components/typography/Heading'
import TagList, {
  TagListLabel,
  TagListTags,
  TagListItem,
} from 'components/ui/TagList'

import Icon from './Icon.styled'
import Feature from './Feature'
import WidgetWrapper from './WidgetWrapper.motion'
import DetailsSectionWrapper from './DetailsSectionWrapper.motion'
import Shine from './Shine.motion'

import Project from '__data__/project/Project'

import companyIconSrc from './assets/ProjectCard__FeatureIcon--copany.svg'
import globeIconSrc from './assets/ProjectCard__FeatureIcon--globe.svg'
import typeIconSrc from './assets/ProjectCard__FeatureIcon--type.svg'

const Widget = inject(WidgetWrapper, {
  border: 'inverted',
  width: '100%',
  boxShadow: 'invertedPalette.900',
  my: 'xl',
  maxWidth: '1000px',
  backgroundColor: 'black',
  overflow: 'hidden',
  position: 'relative',
  flexWrap: 'wrap',
  color: 'inverted',
})

const DetailsSection = inject(Flex, {
  flex: '1 1',
  flexDirection: 'column',
  borderTop: 'inverted',
  py: '2xl',
  px: 'xl',
  mt: 'md',
})

const IconGrid = inject(Grid, {
  borderRight: 'inverted',
  width: '100%',
  my: 'lg',
  px: 'lg',
  gridTemplateRows: '50px 50px',
  gridTemplateColumns: '50px 50px',
  justifyContent: 'center',
  alignContent: 'center',
  gridGap: 'lg',
})

interface ProjectWidgetRelatedProps {
  project: Project
}

export type ProjectWidgetProps = ProjectWidgetRelatedProps & BaseFlexProps

const ProjectWidget: React.FC<ProjectWidgetProps> = (
  props: ProjectWidgetProps,
) => {
  const { project } = props
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Widget onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      <Shine />
      <Flex width={{ _: '100%', md: '200px' }} minHeight="200px">
        <IconGrid>
          {project.icons &&
            project.icons.map(icon => (
              <Icon icon={icon.icon} title={icon.title} key={icon.title} />
            ))}
        </IconGrid>
      </Flex>
      <Flex
        flex="1 1"
        color="inverted"
        fontWeight={200}
        p="lg"
        flexDirection="column"
      >
        <Heading as="h2" lineHeight="1.15em" fontSize="h3">
          {project.title}
        </Heading>
        <Text as="p" fontSize="lead" lineHeight="1.15em" mt="xs">
          {project.description}
        </Text>
        <Grid mt="xl" mb="md" gridTemplateColumns="1fr 1fr 1fr" gridGap="md">
          <Feature
            icon={globeIconSrc}
            title="Country"
            value={project.country}
          />
          <Feature icon={typeIconSrc} title="Type" value={project.type} />
          <Feature
            icon={companyIconSrc}
            title="Employing"
            value={project.companySlug}
          />
        </Grid>
      </Flex>
      <DetailsSectionWrapper isOpen={isOpen}>
        <DetailsSection>
          <TagList>
            <TagListLabel width="130px">Features: </TagListLabel>
            <TagListTags flex="1 1">
              {project.features.split(',').map((feature, i) => (
                <TagListItem key={`${i}-${feature}`}>{feature}</TagListItem>
              ))}
            </TagListTags>
          </TagList>
          <TagList mt="md">
            <TagListLabel width="130px">Technologies: </TagListLabel>
            <TagListTags flex="1 1">
              {project.techStack.split(',').map((feature, i) => (
                <TagListItem key={`${i}-${feature}`}>{feature}</TagListItem>
              ))}
            </TagListTags>
          </TagList>
        </DetailsSection>
      </DetailsSectionWrapper>
    </Widget>
  )
}

export default ProjectWidget
