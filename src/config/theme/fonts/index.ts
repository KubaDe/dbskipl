import { css } from 'styled-components'
export interface Index {
  primary: string
  primaryDisplay: string
  primaryRounded: string
  secondary: string
  secondaryText: string
}

export const fonts: Index = {
  primary: `museo-sans, sans-serif`,
  primaryDisplay: `museo-sans-display, sans-serif`,
  primaryRounded: `museo-sans-rounded, sans-serif`,
  secondary: `essonnes-display, serif`,
  secondaryText: `essonnes-text, serif`,
}

export const fontsImportCss = css`
  @import url('https://use.typekit.net/dkj6xeq.css');
  body {
    font-family: ${fonts.primary};
  }
`
