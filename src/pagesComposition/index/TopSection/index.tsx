import React, { useRef } from 'react';
import { useIntersection } from 'react-use';

import Flex, { FlexItem } from 'components/simpleUi/Flex'
import Box from 'components/simpleUi/Box'
import Decoration from 'components/typography/Decoration'

import Background from './Background'
import BigAvatar from './BigAvatar.motion';
import Heading from './Heading.motion'
import headingPhotoSrc from './assets/_DSC6009.png'

const Section: React.FC = () => {
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    rootMargin: '-200px 0px 100px 0px',
    threshold: .2
  });
  const animationState = intersection?.isIntersecting ? 'active' : 'inactive'

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
            <BigAvatar
              zIndex={2}
              src={headingPhotoSrc}
              title="Jakub Dębski"
              width={{ _: '65%', md: '380px' }}
              animate={animationState}
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
            <Box my={{ _: 'xl', md: 0 }} ref={ref}>
              <Heading
                fontFamily="secondary"
                textAlign={{ _: 'center', md: 'left' }}
                fontSize={{ _: 'display2', lg: 'hero1' }}
                fontWeight={100}
                delayTime={.2}
                zIndex={3}
                animate={animationState}
              >
                <Decoration decorationColor="primary">Software</Decoration>
              </Heading>
              <Heading
                fontFamily="secondary"
                textAlign={{ _: 'center', md: 'left' }}
                fontSize={{ _: 'display2', lg: 'hero2' }}
                fontWeight={100}
                mb={{ _: 'md', lg: '3xl' }}
                delayTime={.4}
                zIndex={2}
                animate={animationState}
              >
                <Decoration decorationColor="primary">developer</Decoration>
              </Heading>
              <Heading
                textAlign={{ _: 'center', md: 'left' }}
                fontSize={{ _: 'display4', lg: 'display1' }}
                fontWeight={100}
                delayTime={.6}
                zIndex={3}
                animate={animationState}
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
