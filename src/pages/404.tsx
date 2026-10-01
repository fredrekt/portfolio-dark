import React, { useState, useEffect } from "react"
import { type HeadProps } from "gatsby"
import { Button } from "baseui/button";
import { ThemeProvider } from 'baseui';
import { HeadingXXLarge, ParagraphLarge } from 'baseui/typography';
import SEO from "../components/seo"
import ArrowRight from 'baseui/icon/arrow-right';
import { Link } from "gatsby";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Navbar from "../components/Navbar";
import errorImg from '../images/error.png'
import { THEME, getStoredTheme, type Theme } from '../types/theme'
import { pageTitleFont, siteTheme } from '../theme/site'

const NotFoundPage = () => {
  const [theme, setTheme] = useState<Theme>(getStoredTheme)

  useEffect(() => {
    typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)  
  },[theme])

  return(
    <ThemeProvider theme={siteTheme(theme)}>
      <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
        <MDBContainer fluid style={{ position: `fixed`, display: `fixed`, height: `80%`, width: `100%`, alignItems: `center`, justifyContent: `center`, background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="px-4">
          <MDBRow>
            <MDBCol md="6" lg="6" className="align-self-center">
              <HeadingXXLarge font={pageTitleFont} marginTop="scale800" marginBottom="scale500">Nothing to see here</HeadingXXLarge>
              <ParagraphLarge marginTop="0" marginBottom="scale800">You just hit something that isn't there, sorry for the inconvenience.</ParagraphLarge>
              <Link to="/">
                  <Button endEnhancer={<ArrowRight size={24} />}>
                      Back to Home 
                  </Button>
              </Link>
              {/* <p>
                <Button endEnhancer={() => <ArrowRight size={24} />}>
                  Start Enhancer
                </Button>
              </p> */}
            </MDBCol>
            <MDBCol md="6" lg="6">
              <img className="w-100 hidden-mobile" src={errorImg} alt="Illustration for a page that could not be found"/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
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
