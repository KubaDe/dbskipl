import React from 'react'
import Link from 'next/link'
import inject from 'hoc/inject'

import Flex, { FlexItem, BaseFlexProps } from 'components/simpleUi/Flex'
import Heading from 'components/typography/Heading'
import Text from 'components/simpleUi/Text'
import Button from 'components/buttons/BasicButton'

const Wrapper = inject(FlexItem, {
  width: { lg: '50%', _: '100%' },
  order: { md: 1, _: 2 },
  px: { md: 'lg', _: 0 },
  flexGrow: 1,
})

const Center = inject(Flex, {
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: '100%',
  flexDirection: 'column',
})

const Title = inject(Heading, {
  fontFamily: 'secondary',
  width: '100%',
  textAlign: { _: 'center', md: 'left' },
  fontSize: { _: 'display2', md: 'hero2', lg: 'hero1' },
  mb: { _: 'lg', md: 'md' },
  fontWeight: 100,
  zIndex: 2,
})

const Description = inject(Text, {
  textAlign: { _: 'center', md: 'left' },
  lineHeight: '1.1em',
  fontSize: { _: 'h3', md: 'h2', lg: 'display4' },
  fontWeight: 100,
  zIndex: 2,
  mb: '2xl',
})

const ProjectsCta = inject(Button, {
  sizeVariant: 'normal',
  as: 'a',
  px: '3xl',
  mx: { _: 'auto', md: 0 },
  width: { _: '100%', md: 'auto' },
})

interface TextColumnRelatedProps {}
type TextColumnProps = BaseFlexProps & TextColumnRelatedProps
const TextColumn: React.FC<TextColumnProps> = (props: TextColumnProps) => {
  return (
    <Wrapper {...props}>
      <Center>
        <Title>Freelance</Title>
        <Description>
          Looking for freelancer to create your web platform or startup? Check
          out my previous projects, get in touch with me and let’s talk about
          cooperation.
        </Description>
        <Link href="#" passHref>
          <ProjectsCta>Previous Projects</ProjectsCta>
        </Link>
      </Center>
    </Wrapper>
  )
}

export default TextColumn
