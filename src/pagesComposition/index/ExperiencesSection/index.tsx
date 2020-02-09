import React from 'react'

import { ScrollBlock } from 'components/layout/buildingBlocks/ScrollBlocks'

const Section: React.FC = () => {
  return (
    <ScrollBlock
      height="100vh"
      maxHeight="3000px"
      backgroundColor="primary"
      position="relative"
      overflow="hidden"
    ></ScrollBlock>
  )
}

export default Section
