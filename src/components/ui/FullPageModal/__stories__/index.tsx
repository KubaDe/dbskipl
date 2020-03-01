import React from 'react'

import Box from 'components/simpleUi/Box'
import Button from 'components/buttons/BasicButton'

import { FullPageModal, useFullPageModalController } from '../'

export default {
  title: 'Ui|FullPageModal',
  decorators: [],
}

const Story = () => {
  const fullPageModalController = useFullPageModalController()
  return (
    <Box>
      <Button
        width="300px"
        height="300px"
        onClick={e =>
          fullPageModalController.open({
            value: true,
            triggerPoint: {
              x: e.clientX,
              y: e.clientY,
            },
          })
        }
      >
        Open me
      </Button>
      <FullPageModal fullPageModalController={fullPageModalController}>
        <button onClick={() => fullPageModalController.close()}>close</button>
      </FullPageModal>
    </Box>
  )
}

export const Basic = () => {
  return <Story />
}
