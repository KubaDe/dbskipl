import React, { useEffect, useRef, useState, DependencyList } from 'react'
import { useAnimation, AnimatePresence } from 'framer-motion'

import { BaseFlexProps } from 'components/simpleUi/Flex'

import Description from './Description.motion'
import Title from './Title.motion'
import BigBubbleMotion from './BigBubble.motion'

const useBubbling = (deps: DependencyList) => {
  const controls = useAnimation()
  const [isInit, setIsInit] = useState(true)
  useEffect(() => {
    if (isInit) {
      setIsInit(false)
      return
    }
    ;(async () => {
      await controls.start('up')
      await controls.start('down')
    })()
  }, [...deps, isInit])
  return controls
}

interface BubbleRelatedProps {
  title: string
  description?: string
}

export type BigBubbleProps = BaseFlexProps & BubbleRelatedProps
const Bubble: React.FC<BigBubbleProps> = (props: BigBubbleProps) => {
  const { title, description } = props
  const bubbling = useBubbling([title])
  return (
    <BigBubbleMotion
      animate={bubbling}
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
      <Title
        color="inverted"
        as="h1"
        fontSize="h2"
        key={title}
      >
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
