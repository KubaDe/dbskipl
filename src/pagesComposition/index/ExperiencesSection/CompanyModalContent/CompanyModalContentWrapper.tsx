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
  px: { _: 'lg', md: 'xl' },
  py: { _: 'lg', md: '0' },
})

const ButtonBackground = inject(Box, {
  width: '300px',
  height: '300px',
  borderRadius: '150px',
  backgroundColor: 'primary',
  position: 'absolute',
  top: { _: '-180px', md: '-140px' },
  right: { _: '-180px', md: '-200px' },
})

const CloseButton = inject(IconButton, {
  icon: <FiX />,
  position: 'absolute',
  top: { md: 'lg', _: 'md' },
  right: { md: 'lg', _: 'md' },
  type: 'primary',
})

interface CompanyModalContentRelatedProps {
  children: React.ReactNode
  close: () => void
}
type CompanyModalContentWrapperProps = CompanyModalContentRelatedProps
const CompanyModalContentWrapper: React.FC<CompanyModalContentWrapperProps> = (
  props: CompanyModalContentWrapperProps,
) => {
  const { children, close } = props
  return (
    <>
      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
      <ButtonBackground />
      <CloseButton onClick={close} />
    </>
  )
}

export default CompanyModalContentWrapper
