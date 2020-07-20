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
import Text from 'components/simpleUi/Text'
import Button from 'components/buttons/BasicButton'
import BgText from 'components/typography/BgText'
import {
  eventFactory,
  getSectionMachine,
  ScrollBlock,
} from 'components/layout/buildingBlocks/ScrollBlocks'

import DescriptionWrapper from './DescriptionWrapper.motion'
import Title from './Title.motion'
import GithubLink from './GithubLink.motion'

const TitleWrapper = inject(Flex, {
  flex: '1 1',
  height: '100%',
  alignItems: 'center',
  justifyContent: { _: 'center', md: 'flex-end' },
  pr: { _: 0, md: '3xl' },
  py: { _: '3xl', md: 0 },
})

const TitleLine = inject(BgText, {
  my: '-0.1em',
  padSize: 'lg',
})

const DescriptionBlock = inject(Text, {
  textAlign: 'justify',
  color: 'inverted',
  maxWidth: { xl: '400px', '2xl': '600px' },
  width: '100%',
  as: 'p',
  display: 'block',
  p: { _: 'md', '2xl': '3xl' },
  fontSize: { _: 'h5', '2xl': 'h4' },
  lineHeight: '1.3em',
})

const sectionMachine = getSectionMachine({
  id: 'hero-machine',
  thresholds: [0.4, 1.55],
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
          pt={0}
          pb="3xl"
          width="100%"
          height={{ md: '100vh' }}
          maxHeight="1000px"
          px="0"
        >
          <TitleWrapper>
            <Title animate={state}>
              <TitleLine>I'm a</TitleLine>
              <TitleLine>Software</TitleLine>
              <TitleLine>Developer</TitleLine>
            </Title>
          </TitleWrapper>
          <DescriptionWrapper animate={state}>
            <GithubLink href="https://github.com/KubaDe" />
            <DescriptionBlock mt="lg">
              I'm a professional front-end developer, passionate about building
              and growing amazing digital products.
            </DescriptionBlock>
            <DescriptionBlock>
              For me, building software is something more than just writing code
              and completing Jira tasks. It's a creative process, which involves
              the participation of many people responsible for delivering
              specific value. For many developers, the outcome of this process
              is the operating application, but I prefer a wider view. The final
              product should be a real-world enhancement that meets customers
              expectations and needs.
            </DescriptionBlock>
            <DescriptionBlock>
              To achieve a positive result that none of the process participants
              can't forget about the main goal.
            </DescriptionBlock>

            <DescriptionBlock as="div" pt="xl" mb="xl">
              <Link href="/software" passHref>
                <Button
                  width="100%"
                  sizeVariant="normal"
                  type="inverted"
                  as="a"
                  title="More about software development"
                >
                  Read more
                </Button>
              </Link>
            </DescriptionBlock>
          </DescriptionWrapper>
        </SectionContent>
      </SectionLayout>
    </ScrollBlock>
  )
}

export default Section
