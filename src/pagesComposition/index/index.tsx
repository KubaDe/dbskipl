import React from 'react'
import LazyLoad from 'react-lazyload'

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
      <LazyLoad height='100vh'>
        <NameSection />
      </LazyLoad>
      <SoftwareDeveloperSection />
      <LazyLoad offset={300} height="300vh">
        <ProjectsSection />
        <PhotographyIntro />
        <Instagram />
      </LazyLoad>
      <ContactSection />
    </Layout>
  )
}

export default PageComposition
