import React from 'react'
import Layout from 'components/layout/Layout'

import HeroSection from './HeroSection'
import NameSection from './NameSection'

const PageComposition: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <NameSection />
    </Layout>
  )
}

export default PageComposition
