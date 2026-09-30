import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import {LightTheme, ThemeProvider, DarkTheme} from 'baseui';
import {styled} from 'baseui';
import Navbar from "../components/Navbar";
import { THEME, getStoredTheme, type Theme } from "../types/theme";

const HeroHeader = styled('h1', ({$theme}) => ({
  fontSize: `10rem`,
  fontFamily: `'Playball', cursive!important`,
  textAlign: `center`,
  fontWeight: `900`,
  "@media screen and (max-width: 540px)": {
    fontSize: `4rem`
  }
}));


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
    <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
      <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
        <HeroContainer>
          <HeroHeader>
            Fred Garingo
          </HeroHeader>
        </HeroContainer>
      </div>
    </ThemeProvider>
  )
}

export const Head = () => <SEO title="Home" />

export default IndexPage
