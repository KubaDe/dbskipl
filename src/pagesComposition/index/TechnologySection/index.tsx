import React from 'react'
import { useMachine } from '@xstate/react'

import {
  ScrollBlock,
  getExperienceSectionMachine,
  eventFactory,
} from 'components/layout/buildingBlocks/ScrollBlocks'
import Flex, { FlexItem } from 'components/simpleUi/Flex'

import Wrapper from './Wrapper'
import Title from './Title'
import Table from './Table'
import Column from './Column'
import TechBadge from './TechBadge'
import HorizontalLine from './HorizontalLine'
import HorizontalLineMobile from './HorizontalLine.mobile'

import useMotionLines from './useMotionLines'

import technologiesJson from './__data__/technologies.json'
import { Technologies } from './__data__/Technologies'
const technologies = technologiesJson as Technologies

const technologySectionMachine = getExperienceSectionMachine({
  id: 'technology-machine',
})

const Section: React.FC = () => {
  const [current, send] = useMachine(technologySectionMachine)
  const state: string[] = current.toStrings()
  const { updateLine, x1, x2 } = useMotionLines()

  const onProgressChange = (progress: number): void => {
    !current.done && send(eventFactory(progress))
    updateLine(progress)
  }

  return (
    <ScrollBlock onProgressChange={onProgressChange}>
      <Wrapper animate={state}>
        <FlexItem pt={{ _: '3xl', md: '2xl' }}>
          <Title>Technologies</Title>
        </FlexItem>
        <Flex
          flexGrow={1}
          alignItems="center"
          justifyContent="center"
          pt={{ _: '3xl', md: '0' }}
          minHeight="620px"
        >
          <Table>
            <HorizontalLine x={x1} invisible="<md" />
            <Column>
              <HorizontalLineMobile invisible=">md" />
              {technologies[0] &&
                technologies[0].map(technology => (
                  <TechBadge key={technology.label}>
                    {technology.label}
                  </TechBadge>
                ))}
            </Column>
            <Column>
              <HorizontalLineMobile invisible=">md" />
              {technologies[1] &&
                technologies[1].map(technology => (
                  <TechBadge key={technology.label}>
                    {technology.label}
                  </TechBadge>
                ))}
            </Column>
            <Column>
              <HorizontalLineMobile invisible=">md" />
              {technologies[2] &&
                technologies[2].map(technology => (
                  <TechBadge key={technology.label}>
                    {technology.label}
                  </TechBadge>
                ))}
            </Column>
            <Column>
              <HorizontalLineMobile invisible=">md" />
              {technologies[3] &&
                technologies[3].map(technology => (
                  <TechBadge key={technology.label}>
                    {technology.label}
                  </TechBadge>
                ))}{' '}
              <HorizontalLineMobile invisible=">md" bottomBorder />
            </Column>
            <HorizontalLine x={x2} bottomBorder invisible="<md" />
          </Table>
        </Flex>
      </Wrapper>
    </ScrollBlock>
  )
}

export default Section
