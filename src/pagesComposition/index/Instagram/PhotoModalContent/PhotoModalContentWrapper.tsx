import React from 'react'
import { FiX } from 'react-icons/fi'

import inject from 'hoc/inject'

import IconButton from 'components/buttons/IconButton'
import Box from 'components/simpleUi/Box'

const ContentWrapper = inject(Box, {
  width: '100%',
  height: '100%',
  overflow: 'scroll',
  position: 'absolute',
  top: '0',
  left: '0',
  color: 'white',
  pl: { _: '0', md: 'sbar' },
  pt: { _: '0', md: 'xl' },
})

const Content = inject(Box, {
  px: { _: 'lg', md: 'xl', '2xl': '20%' },
  py: { _: 'lg', md: '0' },
  position: 'relative',
  height: '100%'
})

const CloseButton = inject(IconButton, {
  icon: <FiX />,
  position: 'absolute',
  top: { md: 'lg', _: 'md' },
  right: { md: 'lg', _: 'md' },
  type: 'primary',
})

interface PhotoModalContentRelatedProps {
  children: React.ReactNode
  close: () => void
}
type PhotoModalContentWrapperProps = PhotoModalContentRelatedProps
const PhotoModalContentWrapper: React.FC<PhotoModalContentWrapperProps> = (
  props: PhotoModalContentWrapperProps,
) => {
  const { children, close } = props
  return (
    <>
      <ContentWrapper onClick={close}>
        <Content>{children}</Content>
      </ContentWrapper>
      {/*<CloseButton onClick={close} />*/}
    </>
  )
}

export default PhotoModalContentWrapper
