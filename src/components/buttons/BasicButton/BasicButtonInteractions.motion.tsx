import get from 'lodash/get'
import { Variants } from 'framer-motion'
import { shadows } from 'config/theme/shadows'
import { colors } from 'config/theme/colors'
import { borders } from 'config/theme/borders'

const getVariant = ({
  name,
  bgColor,
  border,
  color,
  shadowColorPalette,
}: {
  name: string
  bgColor: string
  border: string
  color: string
  shadowColorPalette: string
}) => {
  const base = {
    backgroundColor: get(colors, bgColor, ''),
    border: get(borders, border, ''),
    color: get(colors, color, ''),
  }
  return {
    [name]: {
      ...base,
      boxShadow: get(shadows, `${shadowColorPalette}[600]`),
      transition: {
        type: 'tween',
      },
    },
    [`${name}_hover`]: {
      ...base,
      boxShadow: get(shadows, `${shadowColorPalette}[400]`),
      x: '2px',
      y: '2px',
      transition: {
        type: 'tween',
      },
    },
    [`${name}_tap`]: {
      ...base,
      boxShadow: get(shadows, `${shadowColorPalette}[200]`),
      x: '4px',
      y: '4px',
      transition: {
        type: 'tween',
      },
    },
  }
}

export const variants: Variants = {
  ...getVariant({
    name: 'primary',
    bgColor: 'inverted',
    border: 'primary',
    color: 'black',
    shadowColorPalette: 'primaries',
  }),
  ...getVariant({
    name: 'secondary',
    bgColor: 'black',
    border: 'primary',
    color: 'inverted',
    shadowColorPalette: 'primaries',
  }),
  ...getVariant({
    name: 'inverted',
    bgColor: 'black',
    border: 'inverted',
    color: 'inverted',
    shadowColorPalette: 'invertedPalette',
  }),
  none: {},
}
