import React from 'react'

import { ScrollSpine } from 'components/layout/buildingBlocks/ScrollBlocks'
import Layout from 'components/layout/Layout'

import TopSection from './TopSection'
import ExperiencesSection from './ExperiencesSection'
import FreelanceSection from './FreelanceSection'

const PageComposition: React.FC = () => {
  return (
    <Layout>
      <ScrollSpine>
        <TopSection />
        <ExperiencesSection />
        <FreelanceSection />
      </ScrollSpine>
    </Layout>
  )
}

export default PageComposition
