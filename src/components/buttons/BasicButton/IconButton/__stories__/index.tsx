import React, { useState } from 'react'
import { IconButton,  } from '../index'
import { Type } from '../../MotionBasicButton'
import Flex from 'components/simpleUi/Flex'
import { H2 } from 'components/typography/Heading'

export default {
  title: 'Buttons|Icon',
}

interface Props extends Type {
  m: string,
  onClick: () => any
}

export const Icon = () => {
  const [state, setState] = useState(false)
  const props: Props = {
    m: 'sm',
    onClick: () => setState(!state),
    type: state ? 'primary' : 'secondary',
  }

  return (
    <>
      <H2>Icon button with state</H2>
      <Flex alignItems="center">
        <IconButton {...props}>Motion button</IconButton>
      </Flex>
    </>
  )
}
