import React from 'react'
import { boolean, withKnobs } from '@storybook/addon-knobs'

import BigBubble from '../'

export default {
  title: 'Ui|BigBubble',
  decorators: [withKnobs],
}

export const horizontalBubbles = () => {
  const mode = boolean('mode', false)
  const props = mode
    ? {
        title: 'Acme Inc',
        description:
          'Warsaw bases software house. It cooperates with companies all around the world. ',
      }
    : {
        title: 'Tesla',
        description: 'Some weird company from USA, which produce big RC cars',
      }
  return <BigBubble {...props} />
}
