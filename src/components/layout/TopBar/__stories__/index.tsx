import React, { useState } from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Box from 'components/simpleUi/Box'

import TopMenu from '../'

export default {
  title: 'layout|TopbarMenu',
  decorators: [withKnobs],
}

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isInverted = boolean('Inverted/Primary', false)
  const isPhoto = boolean('Photo/Code', false)
  const isShort = boolean('Short/Long', false)

  return (
    <Box height="200vh" backgroundColor="secondaries.200">
      <TopMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isShort={isShort}
        isInverted={isInverted}
        isPhoto={isPhoto}
      />
    </Box>
  )
}
