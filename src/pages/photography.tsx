import React from 'react'
import { NextPage } from 'next'

import Composition from 'pagesComposition/photography'
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="My photo collection is no ready yet, but stay calm. It will be awesome."
        />
        <title>Jakub Dębski | Photography</title>
      </Head>
      <Composition />
    </>
  )
}

export default Page
