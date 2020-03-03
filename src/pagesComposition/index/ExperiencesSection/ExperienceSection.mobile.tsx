import React, { ChangeEvent, useCallback, useState } from 'react'

import BgText from 'components/typography/BgText'
import { ScrollBlock } from 'components/layout/buildingBlocks/ScrollBlocks'
import VerticalAxis from 'components/ui/ScrollBubbles/VerticalAxis'
import Bubble from 'components/ui/ScrollBubbles/Bubble'

import Wrapper from './Wrapper.motion'
import BubbleWrapper from './BubbleWrapper.mobile'

import { Experiences } from './__data__/Experiences'

interface SectionRelatedProps {
  experiences: Experiences
  onBubbleClick: (e: ChangeEvent<HTMLAnchorElement> & MouseEvent) => void
}

type SectionProps = SectionRelatedProps
const Section: React.FC<SectionProps> = ({
  experiences,
  onBubbleClick,
}: SectionProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const onProgressChange = useCallback((progress: number) => {
    if (progress > 0.2) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  return (
    <ScrollBlock
      onProgressChange={onProgressChange}
      backgroundColor="inverted"
      overflow="hidden"
    >
      <Wrapper
        animate={isVisible ? 'mobileActive' : 'mobileNotActive'}
        initial="mobileNotActive"
        minHeight="800px"
        pb="2xl"
      >
        <BgText
          mx="md"
          my="tbar"
          padSize="md"
          as="h1"
          fontSize={{ _: 'display3', xl: 'display2' }}
          fontFamily="secondary"
          textAlign="center"
        >
          Professional <br />
          experience
        </BgText>

        <VerticalAxis
          bubbles={experiences.map((experience, i) => (
            <BubbleWrapper>
              {({ isOpen }) => (
                <Bubble
                  key={i}
                  title={experience.title}
                  items={[experience.start, experience.end]}
                  isOpen={isOpen}
                  isScalable
                  as="a"
                  name={experience.slug}
                  onClick={onBubbleClick}
                />
              )}
            </BubbleWrapper>
          ))}
        />
      </Wrapper>
    </ScrollBlock>
  )
}

export default Section
