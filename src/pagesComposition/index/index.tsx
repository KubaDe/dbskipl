import React from 'react'
import Layout from 'components/layout/Layout'

import HeroSection from './HeroSection'
import NameSection from './NameSection'
import SoftwareDeveloperSection from './SoftwareDeveloperSection'
import ProjectsSection from './ProjectsSection'

const PageComposition: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <NameSection />
      <SoftwareDeveloperSection />
      <ProjectsSection />
    </Layout>
  )
}

export default PageComposition
