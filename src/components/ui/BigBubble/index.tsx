import React from 'react'

import { BaseFlexProps } from 'components/simpleUi/Flex'

import Description from './Description.motion'
import Title from './Title.motion'
import BigBubbleMotion from './BigBubble.motion'

interface BubbleRelatedProps {
  title?: string
  description?: string
}

export type BigBubbleProps = BaseFlexProps & BubbleRelatedProps
const Bubble: React.FC<BigBubbleProps> = (props: BigBubbleProps) => {
  const { title, description } = props
  return (
    <BigBubbleMotion
      animate={!title && !description ? 'empty' : 'base'}
      width="370px"
      height="370px"
      borderRadius="50%"
      background="black"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p="2xl"
      {...props}
    >
      <Title color="inverted" as="h1" fontSize="h2" key={title}>
        {title}
      </Title>

      {description && (
        <Description
          key={description}
          as="p"
          color="inverted"
          fontSize="paragraph"
          lineHeight="1.5em"
          mt="lg"
          textAlign="center"
        >
          {description}
        </Description>
      )}
    </BigBubbleMotion>
  )
}

export default Bubble
