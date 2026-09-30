import type * as React from "react"

declare module "react" {
  export type RefForwardingComponent<T, P = {}> =
    React.ForwardRefExoticComponent<
      React.PropsWithoutRef<P> & React.RefAttributes<T>
    >
}

declare module "baseui/link" {
  interface LinkProps {
    animateUnderline?: boolean
  }
}
