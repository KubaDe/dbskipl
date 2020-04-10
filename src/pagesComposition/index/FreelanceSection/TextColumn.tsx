import React from 'react'
import Link from 'next/link'
import inject from 'hoc/inject'

import Flex, { FlexItem, BaseFlexProps } from 'components/simpleUi/Flex'
import Button from 'components/buttons/BasicButton'
import Decoration from 'components/typography/Decoration'

import Title from './Title.motion'
import Description from './Description.motion'
import ButtonWrapper from './ButtonWrapper.motion'

const Wrapper = inject(FlexItem, {
  width: { lg: '60%', _: '100%' },
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

const ProjectsCta = inject(Button, {
  sizeVariant: 'normal',
  as: 'a',
  px: '3xl',
  mx: { _: 'auto', md: 0 },
  width: { _: '100%', md: 'auto' },
})

interface TextColumnRelatedProps {
  animationState: string
}
type TextColumnProps = BaseFlexProps & TextColumnRelatedProps
const TextColumn: React.FC<TextColumnProps> = (props: TextColumnProps) => {
  const { animationState } = props
  return (
    <Wrapper {...props}>
      <Center>
        <Title animate={animationState}>
          <Decoration decorationColor="violet">Freelance</Decoration>
        </Title>
        <Description animate={animationState}>
          Looking for freelancer to create your web platform or startup? Check
          out my previous projects, get in touch with me and let’s talk about
          cooperation.
        </Description>
        <ButtonWrapper animate={animationState}>
          <Link href="#" passHref>
            <ProjectsCta>Previous Projects</ProjectsCta>
          </Link>
        </ButtonWrapper>
      </Center>
    </Wrapper>
  )
}

export default TextColumn
