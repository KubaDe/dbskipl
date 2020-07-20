import React, { useEffect } from 'react'

import inject from 'hoc/inject'

import Flex from 'components/simpleUi/Flex'
import Img from 'components/simpleUi/Img'
import BgText from 'components/typography/BgText'
import { useMenuBarController } from 'components/layout/Layout/menuBarController'

import Wrapper from './Wrapper'

const Column = inject(Flex, {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexGrow: 1,
})

const Image = inject(Img, {
  width: { _: '90vw', md: '30vw' },
  height: { _: '90vw', md: '30vw' },
  borderRadius: '30px',
  border: 'inverted',
  borderWidth: '4px',
  my: '3xl',
})

const Section: React.FC = () => {
  const { setIsInverted } = useMenuBarController()
  useEffect(() => {
    setIsInverted(true)
  }, [])
  return (
    <Wrapper borderTop="inverted">
      <Column>
        <BgText
          fontSize={{ _: 'h1', md: 'display1' }}
          as="h1"
          inverted
          fontFamily="secondary"
          mt={{ _: '120px', md: 0 }}
        >
          Photography
        </BgText>
        <Image
          src="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-15/58453701_411712256278602_8352589976422115615_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=FfCCtpd0icYAX-ByPzF&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=c27a7df402a080d3c5429dc09e12ee1c&oe=5F3A4EB4"
          title="Photography is coming soon"
        />
        <BgText
          fontSize={{ _: 'h3', md: 'display4' }}
          as="h2"
          inverted
          fontFamily="secondary"
          mb={{ _: '120px', md: 0 }}
        >
          Coming soon...
        </BgText>
      </Column>
    </Wrapper>
  )
}

export default Section
