import React from 'react'
import { useMachine } from '@xstate/react'

import {
  ScrollBlock,
  getSectionMachine,
  eventFactory,
} from 'components/layout/buildingBlocks/ScrollBlocks'
import Flex, { FlexItem } from 'components/simpleUi/Flex'

import Wrapper from './Wrapper'
import Title from './Title'
import Table from './Table'
import Column from './Column'
import TechBadge from './TechBadge.motion'
import HorizontalLine from './HorizontalLine'
import HorizontalLineMobile from './HorizontalLine.mobile'

import useMotionLines from './useMotionLines'

import technologiesJson from './__data__/technologies.json'
import { Technologies } from './__data__/Technologies'
const technologies = technologiesJson as Technologies

const technologySectionMachine = getSectionMachine({
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
        <FlexItem pt={{ _: '3xl', lg: '2xl' }}>
          <Title>Technologies</Title>
        </FlexItem>
        <Flex
          flexGrow={1}
          alignItems="center"
          justifyContent="center"
          pt={{ _: '3xl', lg: '0' }}
          minHeight="620px"
        >
          <Table>
            <HorizontalLine x={x1} invisible="<lg" />
            <Column>
              <HorizontalLineMobile invisible=">lg" />
              {technologies[0] &&
                technologies[0].map(technology => (
                  <TechBadge key={technology.label}>
                    {technology.label}
                  </TechBadge>
                ))}
            </Column>
            <Column>
              <HorizontalLineMobile invisible=">lg" />
              {technologies[1] &&
                technologies[1].map(technology => (
                  <TechBadge key={technology.label}>
                    {technology.label}
                  </TechBadge>
                ))}
            </Column>
            <Column>
              <HorizontalLineMobile invisible=">lg" />
              {technologies[2] &&
                technologies[2].map(technology => (
                  <TechBadge key={technology.label}>
                    {technology.label}
                  </TechBadge>
                ))}
            </Column>
            <Column>
              <HorizontalLineMobile invisible=">lg" />
              {technologies[3] &&
                technologies[3].map(technology => (
                  <TechBadge key={technology.label}>
                    {technology.label}
                  </TechBadge>
                ))}{' '}
              <HorizontalLineMobile invisible=">lg" bottomBorder />
            </Column>
            <HorizontalLine x={x2} bottomBorder invisible="<lg" />
          </Table>
        </Flex>
      </Wrapper>
    </ScrollBlock>
  )
}

export default Section
