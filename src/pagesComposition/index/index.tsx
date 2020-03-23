import React from 'react'

import { ScrollSpine } from 'components/layout/buildingBlocks/ScrollBlocks'
import Layout from 'components/layout/Layout'

import TopSection from './TopSection'
import ExperiencesSection from './ExperiencesSection'
import FreelanceSection from './FreelanceSection'
import TechnologySection from './TechnologySection'

const PageComposition: React.FC = () => {
  return (
    <Layout>
      <ScrollSpine>
        <TopSection />
        <ExperiencesSection />
        <FreelanceSection />
        <TechnologySection />
        <FreelanceSection />
      </ScrollSpine>
    </Layout>
  )
}

export default PageComposition
