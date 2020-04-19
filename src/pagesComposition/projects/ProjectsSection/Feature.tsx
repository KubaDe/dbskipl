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
    <Flex flex="1 1" {...props}>
      <Flex width="28px" mr="md">
        <Img src={icon} title="" width="100%" />
      </Flex>
      <Flex flex="1 1">
        <Flex flexDirection="column" justifyContent="center">
          <Text display="block" fontWeight={300} fontSize="paragraph">
            {title}:
          </Text>
          <Text display="block" fontSize="paragraph" mt="xs">
            {value}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Feature
