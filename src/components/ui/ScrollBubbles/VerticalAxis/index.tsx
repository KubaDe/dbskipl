import React from 'react'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'
import Grid, { GridItem } from 'components/simpleUi/Grid'

interface VerticalAxisRelatedProps {
  bubbles: React.ReactNode[]
}

export type VerticalAxisProps = BaseBoxProps & VerticalAxisRelatedProps
const VerticalAxis: React.FC<VerticalAxisProps> = (
  props: VerticalAxisProps,
) => {
  const { bubbles } = props
  return (
    <Box {...props} position="relative" width="100%">
      <Grid
        gridTemplateRows={`repeat(${bubbles.length}, 1fr);`}
        gridTemplateColumns={`1fr`}
        gridGap="64px"
        justifyItems="center"
        my="3xl"
      >
        {bubbles.map((bubble, i) => {
          return <GridItem key={i}>{bubble}</GridItem>
        })}
      </Grid>
    </Box>
  )
}

export default VerticalAxis
