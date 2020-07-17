import React from 'react'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'
import Img from 'components/simpleUi/Img'
import Text from 'components/simpleUi/Text'

interface FeatureRelatedProps {
  icon: string
  title: string
  value: string
}

type FeatureProps = BaseFlexProps & FeatureRelatedProps

const Feature: React.FC<FeatureProps> = (props: FeatureProps) => {
  const { icon, title, value } = props
  return (
    <Flex flex="1 1" justifySelf={{_: 'center', md: 'unset'}} {...props}>
      <Flex width="28px" mr={{ _: 'lg', md: 'md' }}>
        <Img src={icon} title="Icon" width="100%" />
      </Flex>
      <Flex flex="1 1">
        <Flex
          flexDirection={{ _: 'row', md: 'column' }}
          justifyContent="center"
          alignItems={{ _: 'center', md: 'flex-start' }}
        >
          <Text
            display="block"
            fontWeight={300}
            fontSize="paragraph"
            width={{ _: '100px', md: 'unset' }}
          >
            {title}:
          </Text>
          <Text
            display="block"
            fontSize="paragraph"
            mt={{ _: '0', md: 'xs' }}
            width={{ _: '100px', md: 'unset' }}
          >
            {value}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Feature
