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
      width={{ _: '300px', xl: '340px' }}
      height={{ _: '300px', xl: '340px' }}
      borderRadius="50%"
      background="black"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p="2xl"
      {...props}
    >
      <Title color="inverted" as="h1" fontSize={{ _: 'h3', xl: 'h2' }} key={title}>
        {title}
      </Title>

      {description && (
        <Description
          key={description}
          as="p"
          color="inverted"
          fontSize="paragraph"
          lineHeight="1.5em"
          mt={{ _: 'md', xl: 'lg' }}
          textAlign="center"
        >
          {description}
        </Description>
      )}
    </BigBubbleMotion>
  )
}

export default Bubble
