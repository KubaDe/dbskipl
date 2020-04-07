import React from 'react'

import inject from 'hoc/inject'

import Flex, { FlexItem, BaseFlexProps } from 'components/simpleUi/Flex'
import Img from 'components/simpleUi/Img'

import SpaceSrc from './assets/space.png'

const Wrapper = inject(FlexItem, {
  px: { md: 'lg', _: 0 },
  width: { lg: '50%', _: '100%' },
  order: { md: 1, _: 2 },
  pt: { _: 'xl', md: 0 },
})

interface PhotoColumnRelatedProps {}
type PhotoColumnProps = BaseFlexProps & PhotoColumnRelatedProps
const PhotoColumn: React.FC<PhotoColumnProps> = (props: PhotoColumnProps) => {
  return (
    <Wrapper {...props}>
      <Flex
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        <Img
          zIndex={2}
          src={SpaceSrc}
          title="Jakub Dębski"
          width={{ _: '65%', md: '300px', lg: '380px' }}
        />
      </Flex>
    </Wrapper>
  )
}

export default PhotoColumn
