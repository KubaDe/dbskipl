import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Footer from '../'

export default {
  title: 'layout|Footer',
  decorators: [withKnobs],
}

export const Basic = () => {
  return <Footer />
}
