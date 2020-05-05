import React, { ChangeEvent, useCallback, useState } from 'react'

import BgText from 'components/typography/BgText'
import { ScrollBlock } from 'components/layout/buildingBlocks/ScrollBlocks'
import VerticalAxis from 'components/ui/ScrollBubbles/VerticalAxis'
import Bubble from 'components/ui/ScrollBubbles/Bubble'
import ShallowLink from 'components/helpers/ShallowLink'

import Wrapper from './Wrapper.motion'
import BubbleWrapper from './BubbleWrapper.mobile'
import Dots from './Dots.motion'

import { Company } from '__data__/company/List'

interface SectionRelatedProps {
  experiences: Company[]
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
        position="relative"
        overflow={'hidden'}
        initial="mobileNotActive"
        minHeight="800px"
        pb="2xl"
      >
        <Dots />
        <BgText
          mx="md"
          my="tbar"
          padSize="md"
          as="h1"
          fontSize={{ _: 'display3', xl: 'display2' }}
          fontFamily="secondary"
          textAlign="center"
          zIndex={1}
        >
          Professional <br />
          experience
        </BgText>

        <VerticalAxis
          bubbles={experiences.map((experience, i) => (
            <BubbleWrapper>
              {({ isOpen }) => (
                <ShallowLink href={`software/?company=${experience.slug}`}>
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
                </ShallowLink>
              )}
            </BubbleWrapper>
          ))}
        />
      </Wrapper>
    </ScrollBlock>
  )
}

export default Section
