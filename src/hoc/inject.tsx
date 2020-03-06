import React from 'react'

function inject<TProps, TInjectedKeys extends keyof TProps>(
  Component: React.JSXElementConstructor<TProps>,
  injector: Pick<TProps, TInjectedKeys>,
) {
  return function Injected(props: Omit<TProps, TInjectedKeys> | TProps) {
    return <Component {...injector} {...(props as TProps)} />
  }
}

export default inject
