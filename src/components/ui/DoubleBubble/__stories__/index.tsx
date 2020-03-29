import React from 'react'

import DoubleBubble from '../'

export default {
  title: 'Ui|DoubleBubble',
}

export const basic = () => {
  return (
    <DoubleBubble
      course="Course: Automatic Control and Robotics"
      faculty="Faculty of Electronics, Telecommunication and Informatics"
      school="Gdansk University of Technology, Poland"
      title="Engineer's degree"
      years="2013-2017"
    />
  )
}
