import React from 'react'

import Wrapper from './Wrapper'
import TextColumn from './TextColumn'
import PhotoColumn from './PhotoColumn'

const Section: React.FC = () => {
  return (
    <Wrapper>
      <TextColumn order={{ _: 2, md: 1 }} />
      <PhotoColumn order={{ _: 1, md: 2 }} />
    </Wrapper>
  )
}

export default Section
