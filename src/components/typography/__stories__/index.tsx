import React from 'react'

import Box from 'components/simpleUi/Box'

import BgText from '../BgText'

export default {
  title: 'Typography|BgText',
}

export const heading = () => (
  <>
    <Box p="lg">
      <BgText>This is sample BgText</BgText>
    </Box>
    <Box p="lg">
      <BgText padSize="sm">This is sample BgText with sm pad</BgText>
    </Box>
    <Box p="lg">
      <BgText padSize="3xl">This is sample BgText with 3xl pad</BgText>
    </Box>
    <Box p="lg" backgroundColor="black">
      <BgText inverted>This is sample BgText inverted</BgText>
    </Box>
  </>
)
