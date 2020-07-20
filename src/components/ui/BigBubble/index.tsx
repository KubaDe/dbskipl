import React from 'react'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

import Description from './Description.motion'
import Title from './Title.motion'

interface BubbleRelatedProps {
  title?: string
  description?: string
}

export type BigBubbleProps = BaseFlexProps & BubbleRelatedProps
const Bubble: React.FC<BigBubbleProps> = (props: BigBubbleProps) => {
  const { title, description } = props
  return (
    <Flex
      width={{ _: '300px', xl: '340px', '2xl': '600px' }}
      height={{ _: '300px', xl: '340px', '2xl': '600px' }}
      borderRadius="50%"
      background="black"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p="2xl"
      {...props}
    >
      <Title
        color="inverted"
        as="h2"
        fontSize={{ _: 'h3', xl: 'h2', '2xl': 'display1' }}
        key={title}
      >
        {title}
      </Title>

      {description && (
        <Description
          key={description}
          as="p"
          color="inverted"
          fontSize={{ _: 'paragraph', '2xl': 'h3' }}
          lineHeight="1.5em"
          mt={{ _: 'md', xl: 'lg' }}
          textAlign="center"
        >
          {description}
        </Description>
      )}
    </Flex>
  )
}

export default Bubble
