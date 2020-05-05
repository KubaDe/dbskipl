import React, { useEffect } from 'react'
import { useMachine } from '@xstate/react'

import {
  SectionContent,
  SectionLayout,
} from 'components/layout/buildingBlocks/SectionContent'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'

import {
  eventFactory,
  getSectionMachine,
  ScrollBlock,
} from 'components/layout/buildingBlocks/ScrollBlocks'

import Content from './Content.motion'
import ContentLine from './ContentLine.motion'
import Image from './Image.motion'
import Wrapper from './Wrapper.motion'

const sectionMachine = getSectionMachine({
  id: 'name-machine',
  thresholds: [0.6, 1.55],
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
        <SectionContent pt={{ _: '86px', md: '0' }} minHeight="100vh">
          <Wrapper animate={state}>
            <Image />
            <Content animate={state}>
              <ContentLine>Hi,</ContentLine>
              <ContentLine>my name is</ContentLine>
              <ContentLine>Kuba</ContentLine>
            </Content>
          </Wrapper>
        </SectionContent>
      </SectionLayout>
    </ScrollBlock>
  )
}

export default Section
