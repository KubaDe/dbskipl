import React, { useEffect, useState, memo } from 'react'
import { motion } from 'framer-motion'

import { BaseBoxProps } from 'components/simpleUi/Box'
import Flex from 'components/simpleUi/Flex'
import Heading from 'components/typography/Heading'

import useColumnMouseHover from 'hooks/useColumnMouseHover'

import BubbleItem from './BubbleItem.motion'
import BubbleItemWrapper, {
  MotionBubbleItemWrapperProps,
} from './BubbleItemWrapper.motion'
import BubbleItemWrapperMotion from './BubbleWrapper.motion'
import { BubbleSVGWrapper } from './Bubble.styled'

import useMorphBubblePath from './useMorphBubblePath'

type BubbleSvgProps = BaseBoxProps & { viewBox: string }
const BubbleSvg = BubbleSVGWrapper as React.FC<BubbleSvgProps>

interface BubbleRelatedProps {
  isOpen: boolean
  isScalable?: boolean
  title: string
  items: string[]
}

const useInertOpen = (isOpen: boolean) => {
  const [inertOpen, setInertOpen] = useState(isOpen)
  useEffect(() => {
    if (isOpen) {
      setInertOpen(true)
    } else {
      setTimeout(() => {
        setInertOpen(false)
      }, 300)
    }
  }, [isOpen])
  return inertOpen
}

export type BubbleProps = MotionBubbleItemWrapperProps & BubbleRelatedProps
const Bubble: React.FC<BubbleProps> = (props: BubbleProps) => {
  const { isOpen, title, items, isScalable = false, onMouseEnter } = props

  const inertOpen = useInertOpen(isOpen)
  const path = useMorphBubblePath(inertOpen)
  const ref = React.useRef(null)
  useColumnMouseHover({ ref, onHover: onMouseEnter })
  return (
    <BubbleItemWrapperMotion
      width="184px"
      height="263px"
      position="relative"
      animate={isScalable && isOpen ? 'zoom' : 'normal'}
      ref={ref}
      {...props}
    >
      <Flex
        width="167px"
        height="167px"
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="inverted" zIndex={1} fontSize="h4" as="h3">
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
    </BubbleItemWrapperMotion>
  )
}

export default memo(Bubble)
