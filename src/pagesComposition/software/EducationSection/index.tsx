import React from 'react'

import Box from 'components/simpleUi/Box'
import BgText from 'components/typography/BgText'
import DoubleBubble from 'components/ui/DoubleBubble'

import Wrapper from './Wrapper'

const bubbles = [
  <DoubleBubble
    course="Course: Automatic Control and Robotics"
    faculty="Faculty of Electronics, Telecommunication and Informatics"
    school="Gdansk University of Technology, Poland"
    title="Engineer's degree"
    years="2013-2017"
  />,
  <DoubleBubble
    course="Course: Management, Marketing"
    faculty="Faculty of Management"
    school="University of Gdańsk, Poland"
    title="Master’s degree"
    years="2017 - now"
    mr="0"
    ml="auto"
  />,
]

const Section: React.FC = () => {
  return (
    <Wrapper>
      <BgText
        as="h2"
        fontSize={{ _: 'display3', xl: 'display2' }}
        textAlign={{ _: 'center', md: 'left' }}
        mt="3xl"
        fontFamily="secondary"
      >
        Education
      </BgText>
      <Box
        pl={{ _: '0', md: '40px' }}
        pt={{ _: '0', md: '100px' }}
        mx={{ _: 0, '2xl': '20%' }}
      >
        {bubbles[0]}
      </Box>
      <Box pr={{ _: '0', md: '40px' }} pt={{ _: '0', md: '20px' }}>
        {bubbles[1]}
      </Box>
    </Wrapper>
  )
}

export default Section
