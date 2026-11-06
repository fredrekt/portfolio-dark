import React, { useState, useEffect } from "react"
import { type HeadProps, Link } from "gatsby"
import { Button } from "baseui/button"
import { ThemeProvider } from "baseui"
import { HeadingXXLarge, ParagraphLarge } from "baseui/typography"
import SEO from "../components/seo"
import ArrowRight from "baseui/icon/arrow-right"
import Navbar from "../components/Navbar"
import errorImg from "../images/error.png"
import { THEME, getStoredTheme, type Theme } from "../types/theme"
import { pageTitleFont, siteTheme } from "../theme/site"
import { PageShell, PageWidth } from "../components/PageShell"

const NotFoundPage = () => {
  const [theme, setTheme] = useState<Theme>(getStoredTheme)

  useEffect(() => {
    typeof window !== `undefined` &&
      window.localStorage.setItem("themeColor", theme)
  }, [theme])

  return (
    <ThemeProvider theme={siteTheme(theme)}>
      <PageShell theme={theme}>
        <Navbar
          onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          }
          color={theme}
        />
        <PageWidth className="flex min-h-[80vh] items-center">
          <div className="grid w-full items-center gap-8 md:grid-cols-2">
            <div>
              <HeadingXXLarge
                font={pageTitleFont}
                marginTop="scale800"
                marginBottom="scale500"
              >
                Nothing to see here
              </HeadingXXLarge>
              <ParagraphLarge marginTop="0" marginBottom="scale800">
                You just hit something that isn't there, sorry for the
                inconvenience.
              </ParagraphLarge>
              <Link to="/">
                <Button endEnhancer={<ArrowRight size={24} />}>
                  Back to Home
                </Button>
              </Link>
            </div>
            <img
              className="hidden w-full md:block"
              src={errorImg}
              alt="Illustration for a page that could not be found"
            />
          </div>
        </PageWidth>
      </PageShell>
    </ThemeProvider>
  )
}

export const Head = ({ location }: HeadProps) => (
  <SEO
    title="Page not found"
    description="That page is not on Fred Garingo's portfolio. Head back home, or open the work, resume, and contact pages."
    pathname={location.pathname}
    noIndex
  />
)

export default NotFoundPage
