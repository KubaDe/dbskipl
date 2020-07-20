import React from 'react'
import LazyLoad from 'react-lazyload'

import { ScrollSpine } from 'components/layout/buildingBlocks/ScrollBlocks'
import Layout from 'components/layout/Layout'

import TopSection from './TopSection'
import ExperiencesSection from './ExperiencesSection'
import FreelanceSection from './FreelanceSection'
import TechnologySection from './TechnologySection'
import EducationSection from './EducationSection'
import ContactSection from './ContactSection'

const PageComposition: React.FC = () => {
  return (
    <Layout>
      <ScrollSpine>
        <TopSection />
        <ExperiencesSection />
        <LazyLoad offset={400} height="90vh">
          <FreelanceSection />
        </LazyLoad>
        <TechnologySection />
        <EducationSection />
        <ContactSection />
      </ScrollSpine>
    </Layout>
  )
}

export default PageComposition
