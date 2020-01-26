import React, { useState } from 'react'
import {
  FiMenu,
  FiThumbsUp,
  FiSpeaker,
  FiImage,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi'

import IconButton from '../index'
import { Type } from 'components/buttons/BasicButton'
import Flex from 'components/simpleUi/Flex'
import { H2 } from 'components/typography/Heading'

export default {
  title: 'Buttons|Icon',
}

interface Props extends Type {
  m: string
  onClick: () => any
}

export const Icon = () => {
  const [state, setState] = useState(false)
  const props: Props = {
    m: 'lg',
    onClick: () => setState(!state),
    type: state ? 'primary' : 'inverted',
  }

  return (
    <>
      <H2>Icon button with state</H2>
      <Flex alignItems="center">
        <IconButton {...props} icon={<FiMenu />} />
        <IconButton {...props} icon={<FiThumbsUp />} />
        <IconButton {...props} icon={<FiSpeaker />} />
        <IconButton {...props} icon={<FiImage />} />
        <IconButton {...props} icon={<FiX />} />
        <IconButton {...props} icon={<FiChevronDown />} />
        <IconButton {...props} icon={<FiChevronUp />} />
      </Flex>
    </>
  )
}
