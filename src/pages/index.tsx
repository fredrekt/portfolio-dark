import React, { useState, useEffect } from "react"
import { type HeadProps } from "gatsby"
import SEO from "../components/seo"
import { ThemeProvider } from 'baseui';
import { styled } from 'baseui';
import { DisplayLarge, LabelMedium } from 'baseui/typography';
import Navbar from "../components/Navbar";
import { THEME, getStoredTheme, type Theme } from "../types/theme";
import { eyebrowFont, heroFont, siteTheme } from "../theme/site";

const HeroRole = styled(LabelMedium, ({ $theme }) => ({
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  [$theme.mediaQuery.medium]: {
    letterSpacing: "0.28em",
  },
}))


const IndexPage = () => {
  const [theme, setTheme] = useState<Theme>(getStoredTheme)

  useEffect(() => {
    typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
  },[theme])

  const HeroContainer = styled('div', ({$theme}) => ({
    height: `81%`,
    width: `100%`,
    display: `flex`,
    position: `fixed`,
    alignItems: `center`,
    justifyContent: `center`,
    background: theme === THEME.light ? "#fff" : "#000", 
    color: theme === THEME.light ? "#000" : "#fff"
  }))
    
  return(
    <ThemeProvider theme={siteTheme(theme)}>
      <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
        <main>
        <HeroContainer>
          <div className="text-center">
            <DisplayLarge
              as="h1"
              font={heroFont}
              marginTop="0"
              marginBottom="0"
            >
              Fred Garingo
            </DisplayLarge>
            <HeroRole as="p" font={eyebrowFont} marginTop="scale850" marginBottom="0">
              Senior Full Stack Developer
            </HeroRole>
          </div>
        </HeroContainer>
        </main>
      </div>
    </ThemeProvider>
  )
}

export const Head = ({ location }: HeadProps) => (
  <SEO
    title="Senior Full Stack Developer"
    description="Fred Garingo is a senior full stack developer in Cebu. He builds web and mobile products end to end, from frontend architecture and backend services to production AI."
    pathname={location.pathname}
  />
)

export default IndexPage
