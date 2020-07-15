import React from 'react'

import Layout from 'components/layout/Layout'
import HeroSection from './HeroSection'
import NameSection from './NameSection'
import SoftwareDeveloperSection from './SoftwareDeveloperSection'
import ProjectsSection from './ProjectsSection'
import PhotographyIntro from './PhotographyIntro'
import Instagram from './Instagram'
import ContactSection from './ContactSection'

const PageComposition: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <NameSection />
      <SoftwareDeveloperSection />
      <ProjectsSection />
      <PhotographyIntro />
      <Instagram />
      <ContactSection />
    </Layout>
  )
}

export default PageComposition
