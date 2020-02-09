import { css, FlattenSimpleInterpolation } from 'styled-components';
import { math } from 'polished';
import { styleFn } from 'styled-system';
import { breakpoints } from 'config/theme/breakpoints';

// TODO: Write tests

const getInvisibleStyle = (
  invisibleVal: string,
): FlattenSimpleInterpolation | null => {
  const scopeSign =
    invisibleVal[0] === '>' || invisibleVal[0] === '<' ? invisibleVal[0] : null
  const rawVal: string = scopeSign ? invisibleVal.substring(1) : invisibleVal
  if (!Object(breakpoints).hasOwnProperty(rawVal)) {
    console.warn(`Can not find breakpoint for ${rawVal}`)
    return null
  }
  const breakpoint = Object(breakpoints)[rawVal]
  if (scopeSign === '>') {
    return css`
      @media (min-width: ${math(`${breakpoint} + 1px`)}) {
        display: none !important;
      }
    `
  } else if (scopeSign === '<') {
    return css`
      @media (max-width: ${breakpoint}) {
        display: none !important;
      }
    `
  } else {
    return null
  }
}

const getInvisibleStyles = (invisibleArrOrVal: string[] | string) => {
  if (!invisibleArrOrVal) {
    return
  }
  if (Array.isArray(invisibleArrOrVal)) {
    const styles = invisibleArrOrVal.map(getInvisibleStyle)
    const style = styles.reduce(
      (acc, style) =>
        css`
          ${acc};
          ${style};
        `,
    )
    return style
  } else {
    const style = getInvisibleStyle(invisibleArrOrVal)
    return style
  }
}

const invisibility: styleFn = (props: {invisible: string | string[]}) => getInvisibleStyles(props.invisible)

export default invisibility
