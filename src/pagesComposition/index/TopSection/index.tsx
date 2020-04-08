import React from 'react'

import Flex, { FlexItem } from 'components/simpleUi/Flex'
import Img from 'components/simpleUi/Img'
import Box from 'components/simpleUi/Box'
import Decoration from 'components/typography/Decoration'

import Background from './Background'
import Heading from './Heading.motion'
import headingPhotoSrc from './assets/_DSC6009.png'

const Section: React.FC = () => {
  return (
    <Box backgroundColor="inverted" position="relative">
      <Flex
        alignContent="center"
        justifyContent="center"
        flexDirection={{ _: 'column', md: 'row' }}
        height={{ _: 'calc(100vh - 76px)', md: '100vh' }}
        maxHeight="900px"
        flexWrap="nowrap"
        mt={{ _: '76px', md: 0 }}
        ml={{ _: 0, md: '86px' }}
        px={{ _: 0, '2xl': '18%' }}
      >
        <FlexItem
          width={{ lg: '40%', xl: '50%', _: '100%' }}
          order={{ md: 1, _: 2 }}
          pt={{ _: 'xl', md: 0 }}
        >
          <Flex alignItems="center" justifyContent="center" height="100%">
            <Img
              zIndex={2}
              src={headingPhotoSrc}
              title="Jakub Dębski"
              width={{ _: '65%', md: '380px' }}
            />
          </Flex>
        </FlexItem>
        <FlexItem
          width={{ lg: '60%', xl: '50%', _: '100%' }}
          order={{ md: 1, _: 2 }}
          flexGrow={1}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            height="100%"
            flexDirection="column"
          >
            <Box my={{ _: 'xl', md: 0 }}>
              <Heading
                fontFamily="secondary"
                textAlign={{ _: 'center', md: 'left' }}
                fontSize={{ _: 'display3', lg: 'hero1' }}
                fontWeight={100}
                delayTime={0}
                zIndex={3}
              >
                <Decoration decorationColor="primary">Software</Decoration>
              </Heading>
              <Heading
                fontFamily="secondary"
                textAlign={{ _: 'center', md: 'left' }}
                fontSize={{ _: 'display3', lg: 'hero2' }}
                fontWeight={100}
                mb={{ _: 'md', lg: '3xl' }}
                delayTime={0.3}
                zIndex={2}
              >
                <Decoration decorationColor="primary">developer</Decoration>
              </Heading>
              <Heading
                textAlign={{ _: 'center', md: 'left' }}
                fontSize={{ _: 'display4', lg: 'display1' }}
                fontWeight={100}
                delayTime={0.6}
                zIndex={2}
              >
                Jakub Debski
              </Heading>
            </Box>
          </Flex>
        </FlexItem>
      </Flex>
      <Background />
    </Box>
  )
}

export default Section
