import React from 'react'

import Box from 'components/simpleUi/Box'

import DoubleSideExplainer, {
  ExplainerDisplay,
  ExplainerLabel,
  ExplainerSubtitle,
  ExplainerText,
  ExplainerTitle,
  LeftExplainer,
  RightExplainer,
} from '../'

export default {
  title: 'Ui|DoubleSideExplainer',
}

export const basic = () => {
  return (
    <Box backgroundColor="black" padding="xl" width="900px" color="white">
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
        </RightExplainer>
      </DoubleSideExplainer>
    </Box>
  )
}

export const display = () => {
  return (
    <Box backgroundColor="black" padding="xl" width="900px" color="white">
      <DoubleSideExplainer>
        <LeftExplainer>
          <ExplainerDisplay>February 2018 – May 2019</ExplainerDisplay>
        </LeftExplainer>
        <RightExplainer>
          <ExplainerTitle mb="md">
            JavaScript developer at Ideamotive in Warsaw
          </ExplainerTitle>
          <ExplainerText>
            Developing web applications for small and medium companies from{' '}
            <br />
            Poland, Germany, UK and Singapore <br />
            Working mainly on React + Redux + […] technology stack
          </ExplainerText>
        </RightExplainer>
      </DoubleSideExplainer>
    </Box>
  )
}
