import React from 'react'
import { AnimatePresence } from 'framer-motion'

import Wrapper from './Wrapper.motion'
import Image from './Image.motion'

import logoSrc from './assets/Logo.png'

interface FullPageLoaderProps {
  isVisible: boolean
}

const FullPageLoader: React.FC<FullPageLoaderProps> = (
  props: FullPageLoaderProps,
) => {
  const { isVisible } = props
  return (
    <AnimatePresence>
      {isVisible && (
        <Wrapper>
          <Image
            src={logoSrc}
            title="Jakub Debski logo"
            width={{ _: '50vw', md: '250px' }}
          />
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

export default FullPageLoader
