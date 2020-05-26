import React, { useEffect } from 'react'
import Link from 'next/link'
import { useMachine } from '@xstate/react'

import inject from 'hoc/inject'
import {
  SectionContent,
  SectionLayout,
} from 'components/layout/buildingBlocks/SectionContent'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'
import Flex from 'components/simpleUi/Flex'
import Img from 'components/simpleUi/Img'
import Text from 'components/simpleUi/Text'
import Button from 'components/buttons/BasicButton'
import {
  eventFactory,
  getSectionMachine,
  ScrollBlock,
} from 'components/layout/buildingBlocks/ScrollBlocks'

import Title from './Title.motion'
import Underline from './Underline.motion'
import ProjectButtonWrapper from './ProjectButtonWrapper.motion'
import ProjectLabel from './ProjectLabel.motion'

import buildingsSrc from './assets/buildings.svg'
import rocketSrc from './assets/business-and-finance.svg'
import deskSrc from './assets/desk.svg'

const TitleLineWrapper = inject(Flex, {
  overflow: 'hidden',
  alignItems: { _: 'center', md: 'flex-start' },
  justifyContent: { _: 'center', md: 'flex-start' },
  as: 'span',
})

const Container = inject(Flex, {
  alignItems: 'center',
  justifyContent: 'center',
})

const Row = inject(Flex, {
  my: '3xl',
  width: '100%',
  minHeight: '500px',
  maxWidth: '1200px',
  flexDirection: { _: 'column', md: 'row' },
})

const Column = inject(Flex, {
  flex: '1 1',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  my: { _: 'xl', md: 0 },
})

const ProjectButton = inject(Button, {
  width: '140px',
  height: '140px',
  borderRadius: '30px',
  as: 'a',
})

const ProjectImg = inject(Img, {
  width: '90%',
})

const ProjectLabelLeft = inject(Flex, {
  mr: 'sm',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  fontSize: 'h2',
  as: 'span',
})

const ProjectLabelRight = inject(Flex, {
  flexDirection: 'column',
  fontSize: 'h4',
  justifyContent: 'center',
})

const ProjectLabelRightLine = inject(Text, {
  display: 'block',
  lineHeight: '1.1em',
})

const sectionMachine = getSectionMachine({
  id: 'projects-machine',
  thresholds: [0.2, 1.3],
})

const Section: React.FC = () => {
  const { setIsInverted } = useMenuBarController()
  const [current, send] = useMachine(sectionMachine)
  const [state] = current.toStrings()
  const onProgressChange = (progress: number): void => {
    !current.done && send(eventFactory(progress))
  }
  useEffect(() => {
    state === 'active' && setIsInverted(false)
  }, [state])
  return (
    <ScrollBlock onProgressChange={onProgressChange} overflow="hidden">
      <SectionLayout backgroundColor="inverted" overflow="hidden">
        <SectionContent
          pt={{ sm: '2xl', md: '3xl' }}
          pb="3xl"
          width="100%"
          px="0"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Flex
            as="h2"
            width="100%"
            pl={{ _: 0, md: '3xl' }}
            my={{ _: 0, md: '3xl' }}
            flexDirection="column"
            alignItems={{ _: 'center', md: 'flex-start' }}
          >
            <TitleLineWrapper fontSize="h4" height="1.1em" mb="3xs">
              <Title animate={state} delay={0}>
                My
              </Title>
            </TitleLineWrapper>
            <TitleLineWrapper
              fontSize={{ _: 'display4', md: 'display2' }}
              height="1em"
            >
              <Title
                animate={state}
                delay={0.5}
                fontWeight={100}
                marginLeft="-4px"
              >
                Professional
              </Title>
            </TitleLineWrapper>
            <TitleLineWrapper fontSize="h2" height="1.1em">
              <Title
                animate={state}
                delay={1}
                fontWeight={500}
                marginLeft="-2px"
              >
                Projects
              </Title>
            </TitleLineWrapper>
            <Underline animate={state} />
          </Flex>
          <Container>
            <Row>
              <Column>
                <ProjectButtonWrapper animate={state}>
                  <Link href="/projects#corporate" passHref>
                    <ProjectButton>
                      <ProjectImg
                        src={buildingsSrc}
                        title="Corporate participation"
                      />
                    </ProjectButton>
                  </Link>
                </ProjectButtonWrapper>
                <Link href="/projects#corporate" passHref>
                  <ProjectLabel animate={state}>
                    <ProjectLabelLeft>8</ProjectLabelLeft>
                    <ProjectLabelRight>
                      <ProjectLabelRightLine>Corporate</ProjectLabelRightLine>
                      <ProjectLabelRightLine>Projects</ProjectLabelRightLine>
                    </ProjectLabelRight>
                  </ProjectLabel>
                </Link>
              </Column>
              <Column>
                <ProjectButtonWrapper animate={state}>
                  <Link href="/projects#freelance" passHref>
                    <ProjectButton>
                      <ProjectImg src={deskSrc} title="Freelance projects" />
                    </ProjectButton>
                  </Link>
                </ProjectButtonWrapper>
                <Link href="/projects#freelance" passHref>
                  <ProjectLabel animate={state}>
                    <ProjectLabelLeft>1</ProjectLabelLeft>
                    <ProjectLabelRight>
                      <ProjectLabelRightLine>Freelance</ProjectLabelRightLine>
                      <ProjectLabelRightLine>Project</ProjectLabelRightLine>
                    </ProjectLabelRight>
                  </ProjectLabel>
                </Link>
              </Column>
              <Column>
                <ProjectButtonWrapper animate={state}>
                  <Link href="/projects#personal" passHref>
                    <ProjectButton>
                      <ProjectImg src={rocketSrc} title="Personal projects" />
                    </ProjectButton>
                  </Link>
                </ProjectButtonWrapper>
                <Link href="/projects#personal" passHref>
                  <ProjectLabel animate={state}>
                    <ProjectLabelLeft>2</ProjectLabelLeft>
                    <ProjectLabelRight>
                      <ProjectLabelRightLine>Personal</ProjectLabelRightLine>
                      <ProjectLabelRightLine>Projects</ProjectLabelRightLine>
                    </ProjectLabelRight>
                  </ProjectLabel>
                </Link>
              </Column>
            </Row>
          </Container>
        </SectionContent>
      </SectionLayout>
    </ScrollBlock>
  )
}

export default Section
