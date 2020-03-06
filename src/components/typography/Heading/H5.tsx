import React from 'react'

import Heading, { HeadingProps } from './'

const H5: React.FC<HeadingProps> = (props: HeadingProps) => (
  <Heading as="h5" fontSize="h5" {...props} />
)

export default H5
