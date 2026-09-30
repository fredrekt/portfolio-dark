import React from "react"
import { styled } from "baseui"

const Header = styled("h1", {
  fontSize: `5rem`,
  fontFamily: `'Lato', sans-serif`,
  letterSpacing: `-.01em`,
  "@media screen and (max-width: 540px)": {
    fontSize: `3rem`,
  },
})

interface HeaderPageProps {
  text: string
}

const HeaderPage = ({ text }: HeaderPageProps) => (
  <Header className="my-5">{text}</Header>
)

export default HeaderPage
