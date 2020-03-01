import React from 'react'
import Link, { LinkProps } from 'next/link'

const ShallowLink: React.FC<LinkProps> = (props: LinkProps) => (
  <Link passHref replace scroll={false} shallow {...props} />
)
export default ShallowLink
