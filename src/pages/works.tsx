import React, { useState, useEffect } from "react"
import HeaderPage from "../components/HeaderPage"
import { Parallax } from "react-parallax"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import { ThemeProvider } from "baseui"
import { Button } from "baseui/button"
import { HeadingXLarge, ParagraphLarge } from "baseui/typography"
import ArrowRight from "baseui/icon/arrow-right"
import { Link, type HeadProps } from "gatsby"
import Work from "../components/works/Work"
import { THEME, getStoredTheme, type Theme } from "../types/theme"
import { pageTitleFont, siteTheme } from "../theme/site"
import { PageShell, PageWidth } from "../components/PageShell"

const WorksPage = () => {
  const [theme, setTheme] = useState<Theme>(getStoredTheme)
  const [hover, setHover] = useState(false)

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
        <PageWidth className="pb-5">
          <HeaderPage text="Selected Work" />
          <ParagraphLarge maxWidth="36rem" marginTop="0" marginBottom="scale800">
            Product engineering across SaaS, AI, health tech, real estate, and
            e-commerce, from early client builds to platforms in production.
          </ParagraphLarge>
          <div className="grid gap-8 md:grid-cols-2">
            <Work />
          </div>
          <div className="my-12">
            <Parallax
              bgImage={`https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
              strength={500}
            >
              <div
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="flex h-[400px] items-center justify-center transition-colors duration-700"
                style={{ background: hover ? "#000" : undefined }}
              >
                <HeadingXLarge
                  color="#fff"
                  marginTop="0"
                  marginBottom="0"
                  className={`text-center transition-opacity duration-500 ${
                    hover ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="mx-2 md:mx-4">Code</span> |
                  <span className="mx-2 md:mx-4">Play</span> |
                  <span className="mx-2 md:mx-4">Gym</span>
                </HeadingXLarge>
              </div>
            </Parallax>
          </div>
          <div className="flex flex-col items-center py-12 text-center">
            <HeadingXLarge font={pageTitleFont} marginTop="0" marginBottom="scale600">
              Got a project in mind?
            </HeadingXLarge>
            <ParagraphLarge marginTop="0" marginBottom="scale600">
              Tell me about the product.
            </ParagraphLarge>
            <Link to="/contact">
              <Button endEnhancer={<ArrowRight size={24} />}>Send Message</Button>
            </Link>
          </div>
        </PageWidth>
      </PageShell>
    </ThemeProvider>
  )
}

export const Head = ({ location }: HeadProps) => (
  <SEO
    title="Selected Work"
    description="Selected product work by Fred Garingo, a senior full stack developer in Cebu. SaaS, AI and sales technology, health tech, real estate, and e-commerce."
    image="/og/works.png"
    pathname={location.pathname}
  />
)

export default WorksPage
