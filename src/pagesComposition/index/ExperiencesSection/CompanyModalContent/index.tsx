import React from 'react'
import { FiX } from 'react-icons/fi'

import IconButton from 'components/buttons/IconButton'

interface CompanyModalContentRelatedProps {
  close: () => void
}

type CompanyModalContentProps = CompanyModalContentRelatedProps

const CompanyModalContent: React.FC<CompanyModalContentProps> = (
  props: CompanyModalContentProps,
) => {
  const { close } = props
  return (
    <>
      <IconButton
        icon={<FiX />}
        onClick={close}
        position="absolute"
        top={{ md: 'lg', _: 'md' }}
        // bottom={{ md: 'auto', _: 'md' }}
        right={{ md: 'lg', _: 'md' }}
        type="primary"
      />
    </>
  )
}

export default CompanyModalContent
