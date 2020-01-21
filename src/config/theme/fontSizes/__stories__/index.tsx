import React from 'react'
import Text from 'components/simpleUi/Text'

export default {
  title: 'Theme|FontSizes',
}

export const SizeAlias = () => (
  <>
    <Text fontSize={'h1'}>Font Alias "h1"</Text>
    <Text fontSize={'h2'}>Font Alias "h2"</Text>
    <Text fontSize={'h3'}>Font Alias "h3"</Text>
    <Text fontSize={'h4'}>Font Alias "h4"</Text>
    <Text fontSize={'h5'}>Font Alias "h5"</Text>
    <Text fontSize={'h6'}>Font Alias "h6"</Text>
    <hr />
    <Text fontSize={'display1'}>Font Alias "display1"</Text>
    <Text fontSize={'display2'}>Font Alias "display2"</Text>
    <Text fontSize={'display3'}>Font Alias "display3"</Text>
    <Text fontSize={'display4'}>Font Alias "display4"</Text>
    <hr />
    <Text fontSize={'blockquote'}>Font Alias "blockquote"</Text>
    <Text fontSize={'lead'}>Font Alias "lead"</Text>
    <Text fontSize={'paragraph'}>Font Alias "paragraph"</Text>
    <Text fontSize={'buttonSmall'}>Font Alias "buttonSmall"</Text>
    <Text fontSize={'buttonNormal'}>Font Alias "buttonNormal"</Text>
    <Text fontSize={'buttonLarge'}>Font Alias "buttonLarge"</Text>
  </>
)
