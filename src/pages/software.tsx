import React from 'react'
import { NextPage } from 'next'

import Composition from 'pagesComposition/software'
import Head from 'next/head'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="I'm a professional software developer but for me, building digital products is something more than just a job. Let me build your next app."
        />
        <title>Jakub Dębski | Software Development</title>
      </Head>
      <Composition />
    </>
  )
}

export default Page
