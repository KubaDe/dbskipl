import React from 'react'
import ExperienceSection from '../'
import { ScrollSpine } from 'components/layout/buildingBlocks/ScrollBlocks'
import Layout from 'components/layout/Layout'

export default {
  title: 'Pages|Index.ExperienceSection',
}

export const section = () => (
  <Layout>
    <ScrollSpine>
      <ExperienceSection />
    </ScrollSpine>
  </Layout>
)
