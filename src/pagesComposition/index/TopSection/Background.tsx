import React from 'react'

import Img from 'components/simpleUi/Img'
import Box from 'components/simpleUi/Box'

import BackgroundImage, { BackgroundImageProps } from './BackgroundImage.motion'

import plant1Src from './assets/plant1.png'
import plant2Src from './assets/plant2.png'
import plant3Src from './assets/plant3.png'
import plant4Src from './assets/plant4.png'
import blobSrc from './assets/Path 2.svg'

const plantProps: BackgroundImageProps = {
  noselect: true,
  position: 'absolute',
  title: '',
  src: '',
  animate: 'stable',
  initial: 'initial',
}

const Background: React.FC = () => {
  return (
    <>
      <BackgroundImage
        {...plantProps}
        src={plant4Src}
        top={{ _: '5%', md: '3%' }}
        left={{ _: '-40%', md: '3%' }}
        width={{ _: '80vw', md: '200px' }}
        delayTime={0}
      />
      <BackgroundImage
        {...plantProps}
        src={plant2Src}
        bottom={{ _: '0', md: '0' }}
        left={{ _: '50%', md: '40%' }}
        width={{ _: '250px', md: '250px' }}
        delayTime={200}
      />
      <BackgroundImage
        {...plantProps}
        src={plant3Src}
        bottom="0"
        right="-15%"
        width={{ _: '200px', md: '400px' }}
        delayTime={400}
        invisible="<lg"
      />
      <BackgroundImage
        {...plantProps}
        src={plant1Src}
        top={{ _: '10%', md: '-4%' }}
        right={{ _: '-3%', md: '8%' }}
        width={{ _: '150px', md: '200px' }}
        delayTime={600}
        invisible="<md"
      />
      <Img
        src={blobSrc}
        title=""
        position="absolute"
        top={{ _: '0%', md: '-12%' }}
        right="-20%"
        width={{ _: '700px', md: '1000px' }}
        noselect
      />
    </>
  )
}

export default Background
