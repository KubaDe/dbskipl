import React from 'react'
import { boolean, withKnobs } from '@storybook/addon-knobs'

import Bubble from '../Bubble'
import HorizontalAxis from '../HorizontalAxis'

export default {
  title: 'Ui|ScrollBubbles',
  decorators: [withKnobs],
}

export const bubble = () => {
  const isOpen = boolean('isOpen', false)

  return (
    <Bubble
      isOpen={isOpen}
      title="Acme Inc"
      items={['February 2018', 'May 2019']}
    />
  )
}

export const horizontalBubbles = () => {
  const isOpen1 = boolean('isOpen1', false)
  const isOpen2 = boolean('isOpen2', false)
  const isOpen3 = boolean('isOpen3', false)
  const isOpen4 = boolean('isOpen4', false)
  return (
    <HorizontalAxis
      bubbles={[
        <Bubble
          isOpen={isOpen1}
          title="Acme Inc"
          items={['February 2018', 'May 2019']}
        />,
        <Bubble
          isOpen={isOpen2}
          title="Acme Inc"
          items={['February 2018', 'May 2019']}
        />,
        <Bubble
          isOpen={isOpen3}
          title="Acme Inc"
          items={['February 2018', 'May 2019']}
        />,
        <Bubble
          isOpen={isOpen4}
          title="Acme Inc"
          items={['February 2018', 'May 2019']}
        />,
      ]}
    />
  )
}
