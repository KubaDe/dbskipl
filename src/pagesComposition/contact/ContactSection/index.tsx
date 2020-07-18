import React, { useEffect } from 'react';

import inject from 'hoc/inject'

import Flex from 'components/simpleUi/Flex'
import Box from 'components/simpleUi/Box'
import BgText from 'components/typography/BgText'
import { useMenuBarController } from 'components/layout/Layout/menuBarController';

import Wrapper from './Wrapper'

const Column = inject(Flex, {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexGrow: 1,
})

const Section: React.FC = () => {
  const { setIsInverted } = useMenuBarController()
  useEffect(() => {
    setIsInverted(true)
  }, [])
  return (
    <Wrapper borderTop="inverted">
      <Column>
        <BgText fontSize="display1" as="h1" inverted>
          Contact
        </BgText>
      </Column>
      <Column>
        <Box>
          <BgText fontSize="h2" as="p" inverted>
            Jakub Debski
          </BgText>
          <BgText fontSize="h2" as="p" inverted>
            <a href="mailto:hello@dbski.pl">hello@dbski.pl</a>
          </BgText>
        </Box>
      </Column>
    </Wrapper>
  )
}

export default Section
