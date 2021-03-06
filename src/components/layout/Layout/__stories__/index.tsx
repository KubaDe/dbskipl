import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Box from 'components/simpleUi/Box'

import Layout from '../'

export default {
  title: 'layout|FullLayout',
  decorators: [withKnobs],
}

export const Basic = () => {
  return (
    <Box height="200vh" backgroundColor="secondaries.200">
      <Layout />
    </Box>
  )
}
