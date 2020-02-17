import React from 'react'

import { ScrollBlock, ScrollSpine } from 'components/layout/buildingBlocks/ScrollBlocks';
import Layout from 'components/layout/Layout'

import TopSection from './TopSection'
import ExperiencesSection from './ExperiencesSection'

const PageComposition: React.FC = () => {
  return (
    <Layout>
      <ScrollSpine>
        <TopSection />
        <ExperiencesSection />
        <ScrollBlock height="100vh" maxHeight="3000px" backgroundColor="inverted"/>
      </ScrollSpine>
    </Layout>
  )
}

export default PageComposition
