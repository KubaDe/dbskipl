import { colors } from '../colors'
import { transparentize } from 'polished'

interface Palette {
  [index: number]: string
}

export interface Shadows {
  primary: string
  primaries: Palette
}

const primaryShadowColor: string = transparentize(0.2, colors.black)

export const shadows: Shadows = {
  primary: `4px 4px 0 0px ${primaryShadowColor}`,
  primaries: {
    100: `-1px -1px 0 0px ${primaryShadowColor}`,
    200: `0px 0px 0 0px ${primaryShadowColor}`,
    300: `1px 1px 0 0px ${primaryShadowColor}`,
    400: `2px 2px 0 0px ${primaryShadowColor}`,
    500: `3px 3px 0 0px ${primaryShadowColor}`,
    600: `4px 4px 0 0px ${primaryShadowColor}`,
    700: `4px 4px 0 0px ${primaryShadowColor}`,
    800: `5px 5px 0 0px ${primaryShadowColor}`,
    900: `5px 5px 0 0px ${primaryShadowColor}`,
  },
}
