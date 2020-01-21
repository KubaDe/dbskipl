import React, { useState } from 'react'
import Button, { MotionBasicButton } from '../index'
import Flex from 'components/simpleUi/Flex'
import { H2 } from 'components/typography/Heading'

export default {
  title: 'Buttons|Basic',
}

const props = {
  m: 'sm',
}

export const Basic = () => {
  const [state, setState] = useState(false)
  return (
    <>
      <H2>Motion state button</H2>
      <Flex>
        <MotionBasicButton
          {...props}
          onClick={() => setState(!state)}
          type={state ? 'primary' : 'secondary'}
        >
          Motion button
        </MotionBasicButton>
      </Flex>
      <H2>Button sizes</H2>
      <Flex>
        <Button sizeVariant="small" {...props}>
          "small" button
        </Button>
        <Button {...props}>"normal" button</Button>
        <Button sizeVariant="large" {...props}>
          "large" button
        </Button>
      </Flex>
      <H2>Button types</H2>
      <Flex>
        <Button type="primary" {...props}>
          "primary" button
        </Button>
        <Button type="secondary" {...props}>
          "secondary" button
        </Button>
      </Flex>
      <H2>Outline</H2>
      <Flex>
        <Button outline {...props}>
          "outline" button
        </Button>
        <Button {...props}>"button</Button>
      </Flex>
    </>
  )
}
