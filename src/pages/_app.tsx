import App, { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'
import delay from 'lodash/delay'
import { ThemeProvider } from 'styled-components'
import ReactGA from 'react-ga';

import theme, { GlobalStyles } from 'config/theme'

interface CustomAppState {
  loaderVisible: boolean
}

export default class CustomApp extends App<{}, {}, CustomAppState> {
  private readonly pageView: () => any

  constructor(props: AppProps) {
    super(props)
    this.state = {
      loaderVisible: true,
    }
    this.pageView = () => delay(() => {
      try {
        ReactGA.pageview(window.location.pathname + window.location.search);
      } catch (e) {
        console.error(e)
      }
    }, 300)
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
    try {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA || "");
      this.pageView()
      Router.events.on('routeChangeComplete', () => {
        this.pageView()
      })
    } catch (e) {
      console.error(e)
    }
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
            content="width=device-width, initial-scale=1.0"
          />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
