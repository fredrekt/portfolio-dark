import React from "react"
import { HeadingXXLarge } from "baseui/typography"
import { pageTitleFont } from "../theme/site"

interface HeaderPageProps {
  text: string
  level?: "h1" | "h2"
}

const HeaderPage = ({ text, level = "h1" }: HeaderPageProps) => (
  <HeadingXXLarge
    as={level}
    font={pageTitleFont}
    marginTop="scale1200"
    marginBottom="scale800"
  >
    {text}
  </HeadingXXLarge>
)

export default HeaderPage
