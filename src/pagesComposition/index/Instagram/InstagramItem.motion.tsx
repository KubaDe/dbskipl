import React from 'react'
import { motion, AnimationProps, MotionProps, Variants } from 'framer-motion'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'
import Img from 'components/simpleUi/Img'

import { InstagramPhoto } from 'hooks/useInstagramPhotos'

import InstagramItemPhoto from './InstagramItemPhoto.motion'
import InstagramItemShadow from './InstagramItemShadow.motion'

import albumSrc from './assets/album.svg'
import diskPreloadSrc from '../HeroSection/assets/Disk-min-2xs.png'

const variants: Variants = {
  whileHover: {
    x: '4px',
    y: '4px',
  },
  whileTap: {
    x: '6px',
    y: '6px',
  },
  active: {
    x: 0,
    y: 0,
  },
}

interface InstagramItemRelatedProps {
  instagramPhoto: InstagramPhoto
}

export type MotionInstagramItemProps = AnimationProps &
  InstagramItemRelatedProps &
  BaseFlexProps &
  MotionProps

const MotionInstagramItem: React.FC<MotionInstagramItemProps> = motion.custom(
  Flex,
)

const InstagramItem: React.FC<MotionInstagramItemProps> = (
  props: MotionInstagramItemProps,
) => {
  const { instagramPhoto } = props
  return (
    <MotionInstagramItem
      whileHover="whileHover"
      whileTap="whileTap"
      variants={variants}
      color="white"
      alignItems="center"
      justifyContent="center"
      position="relative"
      m="md"
      borderRadius="18px"
      padding={0}
      border="none"
      background="none"
      as="button"
      title={instagramPhoto.caption}
      {...props}
    >
      <InstagramItemPhoto
        src={instagramPhoto.mediaUrl || ''}
        backgroundImage={`url("${instagramPhoto.permalink}media?size=t")`}
        backgroundPosition="center"
        backgroundSize="100%"
        background="black"
        title={instagramPhoto.caption}
        zIndex={2}
        borderRadius="30px"
        border="inverted"
        borderWidth="2px"
      />
      {instagramPhoto.children && (
        <Flex
          position="absolute"
          top="sm"
          right="sm"
          width="sm"
          height="sm"
          borderRadius="50%"
          backgroundColor="inverted"
          zIndex={3}
          alignItems="center"
          justifyContent="center"
          border="primary"
          boxShadow="primaries.400"
        >
          <Img src={albumSrc} title="Album" width="2xs" height="2xs" />
        </Flex>
      )}
      <InstagramItemShadow borderRadius="30px" />
    </MotionInstagramItem>
  )
}

export default InstagramItem
