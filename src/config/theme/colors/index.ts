import { tint, shade } from 'polished'

interface Palette {
  [index: number]: string
  light?: string
  dark?: string
}

const generateColorPalette = (color: string): Palette => ({
  '100': tint(0.8, color),
  '200': tint(0.6, color),
  '300': tint(0.4, color),
  '400': tint(0.2, color),
  '500': color,
  '600': shade(0.2, color),
  '700': shade(0.4, color),
  '800': shade(0.6, color),
  '900': shade(0.8, color),
  dark: shade(0.4, color),
  light: tint(0.4, color),
})

interface FunctionalColors {
  info: string
  warning: string
  danger: string
  success: string
  shades: {
    info: Palette
    warning: Palette
    danger: Palette
    success: Palette
  }
}

const baseFunctionalColors = {
  info: '#2196F3',
  warning: '#ff9800',
  danger: '#f44336',
  success: '#4CAF50',
}

const functionalColors: FunctionalColors = {
  ...baseFunctionalColors,
  shades: {
    info: generateColorPalette(baseFunctionalColors.info),
    warning: generateColorPalette(baseFunctionalColors.warning),
    danger: generateColorPalette(baseFunctionalColors.danger),
    success: generateColorPalette(baseFunctionalColors.success),
  },
}

export interface Colors {
  primary: string
  primaries: Palette
  secondary: string
  secondaries: Palette
  black: string
  transparentBlack: string
  white: string
  transparentWhite: string
  inverted: string
  gray: string
  grayScale: Palette
  functionalColors: FunctionalColors
}

const primaryColors = {
  primary: '#AA6232',
  secondary: '#D3DBCB',
  violet: '#232758',
  black: '#000000',
  transparentBlack: 'rgba(0, 0, 0, 0)',
  white: '#FFFFFF',
  transparentWhite: 'rgba(255, 255, 255, 0)',
  inverted: '#FFFFFE',
  gray: '#7f7f7f',
}

export const colors: Colors = {
  ...primaryColors,
  primaries: generateColorPalette(primaryColors.primary),
  secondaries: generateColorPalette(primaryColors.secondary),
  grayScale: generateColorPalette(primaryColors.gray),
  functionalColors,
}
