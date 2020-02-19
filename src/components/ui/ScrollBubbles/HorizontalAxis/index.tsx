import React, { useEffect, useLayoutEffect, useRef } from 'react'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'
import Grid, { GridItem } from 'components/simpleUi/Grid'

interface HorizontalAxisRelatedProps {
  bubbles: React.ReactNode[]
  height?: number
}

export type HorizontalAxisProps = BaseBoxProps & HorizontalAxisRelatedProps
const HorizontalAxis: React.FC<HorizontalAxisProps> = (
  props: HorizontalAxisProps,
) => {
  const { bubbles, height = 400 } = props
  return (
    <Box
      {...props}
      position="relative"
      height={`${height}px`}
      top={0}
      width="100%"
    >
      <Grid
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        gridTemplateColumns={`repeat(${bubbles.length}, 1fr);`}
        gridTemplateRows={`1fr`}
        justifyItems="center"
      >
        {bubbles.map((bubble, i) => {
          const x = (i / bubbles.length) * 3.8 + 1
          return (
            <GridItem
              key={i}
              mt={`${(-x * x * 0.105 + x * 0.33 + 0.38) * height}px`}
            >
              {bubble}
            </GridItem>
          )
        })}
      </Grid>
      <svg
        height={`${height}px`}
        width="100%"
        viewBox="0 0 1300 600"
        preserveAspectRatio="none"
      >
        <path
          d="M22,468.946197 C234.128562,557.064237 463.550661,541.827199 710.266296,423.235081 C956.981931,304.642964 1144.55983,181.564604 1273,54"
          stroke="#000000"
          strokeWidth="8"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  )
}

export default HorizontalAxis
