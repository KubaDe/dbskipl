import React from 'react'
import { NextPage } from 'next'

import Composition from 'pagesComposition/contact'
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Do you have any questions about projects, frontend development, or my photos? Feel free to send me a message."
        />
        <title>Jakub Dębski | Lets talk</title>
      </Head>
      <Composition />
    </>
  )
}

export default Page
