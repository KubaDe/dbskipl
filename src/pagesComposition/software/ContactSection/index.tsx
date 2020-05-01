import React from 'react'

import inject from 'hoc/inject'

import Flex from 'components/simpleUi/Flex'
import Box from 'components/simpleUi/Box'
import BgText from 'components/typography/BgText'

import Wrapper from './Wrapper'

const Column = inject(Flex, {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexGrow: 1,
})

const Section: React.FC = () => {
  return (
    <Wrapper>
      <Column>
        <BgText fontSize="display1" as="h1">
          Contact
        </BgText>
      </Column>
      <Column>
        <Box>
          <BgText fontSize="h2" as="p">
            Jakub Debski
          </BgText>
          <BgText fontSize="h2" as="p">
            <a href="mailto:contact@dbski.pl">contact@dbski.pl</a>
          </BgText>
        </Box>
      </Column>
    </Wrapper>
  )
}

export default Section
