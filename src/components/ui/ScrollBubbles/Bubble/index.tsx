import React, { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'
import Flex from 'components/simpleUi/Flex'
import Heading from 'components/typography/Heading'

import BubbleItem from './BubbleItem.motion'
import BubbleItemWrapper from './BubbleItemWrapper.motion'

import useMorphBubblePath from './useMorphBubblePath'

type BubbleSvgProps = BaseBoxProps & { viewBox: string }
const BubbleSvg = Box as React.FC<BubbleSvgProps>

interface BubbleRelatedProps {
  isOpen: boolean
  title: string
  items: string[]
}

const useInertOpen = (isOpen: boolean) => {
  const [inertOpen, setInertOpen] = useState(isOpen)
  useEffect(() => {
    if(isOpen){
      setInertOpen(true)
    } else {
      setTimeout(() => {
        setInertOpen(false)
      }, 300)
    }
  }, [isOpen])
  return inertOpen
}

export type BubbleProps = BaseBoxProps & BubbleRelatedProps
const Bubble: React.FC<BubbleProps> = (props: BubbleProps) => {
  const { isOpen, title, items } = props
  const inertOpen = useInertOpen(isOpen)
  const path = useMorphBubblePath(inertOpen)
  return (
    <Box {...props} width="184px" height="263px" position="relative">
      <Flex
        width="167px"
        height="167px"
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="inverted" zIndex={1} fontSize="h4">
          {title}
        </Heading>
      </Flex>
      <BubbleItemWrapper isOpen={inertOpen}>
        {items.map((text, i) => (
          <BubbleItem key={text + i}>{text}</BubbleItem>
        ))}
      </BubbleItemWrapper>
      <BubbleSvg
        as="svg"
        width="184"
        height="263"
        position="absolute"
        left="0"
        top="0"
        viewBox="0 0 184 263"
      >
        <motion.path d={path} />
      </BubbleSvg>
    </Box>
  )
}

export default Bubble
