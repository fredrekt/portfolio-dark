import React, { useState, useEffect } from "react"
import { type HeadProps } from "gatsby"
import { ThemeProvider } from "baseui"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import HeaderPage from "../components/HeaderPage"
import BlogPreview from "../components/blog/BlogPreview"
import { THEME, getStoredTheme, type Theme } from "../types/theme"
import { siteTheme } from "../theme/site"
import { PageShell, PageWidth } from "../components/PageShell"

const BlogPage = () => {
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
        <PageWidth>
          <HeaderPage text="Blog" />
        </PageWidth>
        <PageWidth className="pb-12">
          <div className="grid gap-8 pb-12 sm:grid-cols-2 lg:grid-cols-4">
            <BlogPreview theme={theme} />
          </div>
        </PageWidth>
      </PageShell>
    </ThemeProvider>
  )
}

export const Head = ({ location }: HeadProps) => (
  <SEO
    title="Blog"
    description="Writing by Fred Garingo, a senior full stack developer in Cebu, on building and shipping software."
    image="/og/blog.png"
    pathname={location.pathname}
  />
)

export default BlogPage
