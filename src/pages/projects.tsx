import React from 'react'
import { NextPage } from 'next'

import Composition from 'pagesComposition/projects'
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Let me tell you something about my experiences as a software developer. What kind of app would you like to create with me? Marketplace? Advanced eCommerce? Analytical dashboard? Uniquely crafted website? Or maybe something unexpected?"
        />
        <title>Jakub Dębski | Professional and Freelance Projects</title>
      </Head>
      <Composition />
    </>
  )
}

export default Page
