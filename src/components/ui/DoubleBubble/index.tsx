import React from 'react'
import inject from 'hoc/inject'
import useIsScrolling from 'hooks/useIsScrolling'

import Box from 'components/simpleUi/Box'
import Text from 'components/simpleUi/Text'
import Heading from 'components/typography/Heading'

import DoubleBubbleStyled, {
  StyledDoubleBubbleProps,
} from './DoubleBubble.styled'

const WIDTH = 600
const Content = inject(Box, {
  position: 'absolute',
  width: '75.6%',
  height: '46.1%',
  top: '26.6%',
  left: '10.4%',
  p: 'md',
})

interface DoubleBubbleRelatedProps {
  years: string
  title: string
  school: string
  faculty: string
  course: string
}

type DoubleBubbleProps = StyledDoubleBubbleProps & DoubleBubbleRelatedProps
const DoubleBubble: React.FC<DoubleBubbleProps> = (
  props: DoubleBubbleProps,
) => {
  const { course, faculty, school, title, years, ...rest } = props
  const isScrolling = useIsScrolling()

  return (
    <DoubleBubbleStyled
      height={`${WIDTH * 0.65}px`}
      width={`${WIDTH}px`}
      animating={isScrolling}
      {...rest}
    >
      <Content>
        <Heading as="span" fontSize="h4" color="inverted" mb="2xs">
          {years}
        </Heading>
        <Heading as="h2" fontSize="h2" color="inverted">
          {title}
        </Heading>
        <Heading as="h3" fontSize="h4" color="inverted" my="md">
          {school}
        </Heading>
        <Text as="p" fontSize="h6" color="inverted" lineHeight="1.3em">
          {faculty}
          <br />
          {course}
        </Text>
      </Content>
    </DoubleBubbleStyled>
  )
}

export default DoubleBubble
