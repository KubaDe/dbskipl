import React from 'react'

import Box from 'components/simpleUi/Box'

import TagList, { TagListLabel, TagListTags, TagListItem } from '../'

export default {
  title: 'Ui|TagList',
}

export const basic = () => {
  return (
    <Box backgroundColor="black" padding="xl" width="600px" color="white">
      <TagList>
        <TagListLabel>Country: </TagListLabel>
        <TagListTags>
          <TagListItem>Developing web</TagListItem>
          <TagListItem>applications</TagListItem>
          <TagListItem>for small and</TagListItem>
          <TagListItem>companies</TagListItem>
          <TagListItem>Developing</TagListItem>
          <TagListItem>web applications</TagListItem>
          <TagListItem>companies</TagListItem>
          <TagListItem>web applications</TagListItem>
          <TagListItem>for small and</TagListItem>
        </TagListTags>
      </TagList>
    </Box>
  )
}
