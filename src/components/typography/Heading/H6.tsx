import React from 'react'

import Heading, { HeadingProps } from './'

const H6: React.FC<HeadingProps> = (props: HeadingProps) => (
  <Heading as="h6" fontSize="h6" {...props} />
)

export default H6
