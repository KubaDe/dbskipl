import React, { Children, useRef, useContext, MutableRefObject, RefObject } from 'react'
import 'intersection-observer'
import { StyledBox, StyledBoxProps } from './Spine.styled'

export type SpineProps = StyledBoxProps

const SpineRefContext = React.createContext<RefObject<
  HTMLElement
> | null>(null)

const Spine: React.FC<SpineProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLElement>()
  return (
    <SpineRefContext.Provider
      value={ref as RefObject<HTMLElement> | null}
    >
      <StyledBox {...props} ref={ref}>
        {Children.map(children, child => {
          return child
        })}
      </StyledBox>
    </SpineRefContext.Provider>
  )
}

export const useSpineRef = () => useContext(SpineRefContext)

export default Spine
