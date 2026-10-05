declare module "*.css"

declare module "*.png" {
  const src: string
  export default src
}

declare module "mdbreact" {
  export const MDBContainer: any
  export const MDBRow: any
  export const MDBCol: any
  export const MDBNavbar: any
  export const MDBNavbarNav: any
  export const MDBCollapse: any
  export const MDBNavItem: any
  export const MDBIcon: any
  export const MDBAnimation: any
  export const MDBView: any
  export const MDBMask: any
}

declare module "react-google-recaptcha" {
  import { Component, Ref } from "react"

  interface ReCAPTCHAProps {
    sitekey: string
    theme?: "light" | "dark"
    onChange?: (token: string | null) => void
    onExpired?: () => void
    onErrored?: () => void
    ref?: Ref<ReCAPTCHA>
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    reset(): void
    execute(): void
    getValue(): string | null
  }
}

declare module "react-hamburger-menu" {
  import { FC } from "react"

  interface HamburgerMenuProps {
    isOpen: boolean
    menuClicked: () => void
    width?: number
    height?: number
    strokeWidth?: number
    rotate?: number
    color?: string
    borderRadius?: number
    animationDuration?: number
    className?: string
  }

  const HamburgerMenu: FC<HamburgerMenuProps>
  export default HamburgerMenu
}

declare module "react-progressive-image" {
  import { ReactNode } from "react"

  interface ProgressiveImageProps {
    className?: string
    children?: (src: string, loading: boolean) => ReactNode
  }
}

declare module "baseui/icon/arrow-right" {
  import { FC, ReactNode } from "react"

  interface IconProps {
    size?: number | string
    color?: string
    title?: string
    children?: ReactNode
  }

  const ArrowRight: FC<IconProps>
  export default ArrowRight
}

declare module "react-moment" {
  import { FC, ReactNode } from "react"

  interface MomentProps {
    format?: string
    children?: ReactNode
  }

  const Moment: FC<MomentProps>
  export default Moment
}

declare module "react-facebook" {
  import { FC, MouseEvent, ReactNode } from "react"

  export const FacebookProvider: FC<{
    appId?: string
    children?: ReactNode
  }>

  export const Share: FC<{
    href: string
    children: (props: {
      handleClick: (event: MouseEvent<HTMLAnchorElement>) => void
      loading: boolean
    }) => ReactNode
  }>
}

declare module "react-linkedin-share-link" {
  import { FC, ReactNode } from "react"

  interface ShareLinkProps {
    link: string
    children: (link: string) => ReactNode
  }

  const ShareLink: FC<ShareLinkProps>
  export default ShareLink
}

declare module "markdown-to-jsx" {
  import { ComponentType, FC, ReactNode } from "react"

  interface MarkdownProps {
    children?: ReactNode
    className?: string
    style?: Record<string, string | number>
    options?: {
      overrides?: Record<
        string,
        { component?: string | ComponentType<any>; props?: Record<string, unknown> }
      >
    }
  }

  const Markdown: FC<MarkdownProps>
  export default Markdown
}
