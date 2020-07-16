import App, { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import delay from 'lodash/delay'
import { ThemeProvider } from 'styled-components'

import theme, { GlobalStyles } from 'config/theme'
import FullPageLoader from 'components/layout/FullPageLoader'

interface CustomAppState {
  loaderVisible: boolean
}

export default class CustomApp extends App<{}, {}, CustomAppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      loaderVisible: true,
    }
  }
  // @ts-ignore
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  componentDidMount(): void {
    this.setState({ loaderVisible: true })
    delay(() => {
      this.setState({ loaderVisible: false })
    }, 3500)
    // @ts-ignore
    if (window.netlifyIdentity) {
      // @ts-ignore
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          // @ts-ignore
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <GlobalStyles />
        {/*<FullPageLoader isVisible={this.state.loaderVisible}/>*/}
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
