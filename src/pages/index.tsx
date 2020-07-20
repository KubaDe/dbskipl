import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import Composition from 'pagesComposition/index'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="I'm Jakub. Professionally I create software, less professionally I take photos. Here I want to express both of these passions together. In addition, it will be about code, apps, frontend, projects, photos, places, and other good stuff."
        />
        <title>Jakub Dębski | Software x Photography</title>
      </Head>
      <Composition />
    </>
  )
}

export default Page
