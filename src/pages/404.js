import React, { useState } from "react"
import { Button } from "baseui/button";
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import SEO from "../components/seo"
import ArrowRight from 'baseui/icon/arrow-right';
import { Link } from "gatsby";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Navbar from "../components/Navbar";
import { styled } from 'baseui'
import errorImg from '../images/error.png'

const THEME = {
  light: 'light',
  dark: 'dark',
};

const HeaderError = styled('h1', {
  fontSize: `5rem`,
  fontFamily: `'Lato', sans-serif`,
  letterSpacing: `-.01em`,
  "@media screen and (max-width: 540px)": {
    fontSize: `3rem`
  }
})

const SubError = styled('p', {
  fontSize: `1.4rem`,
  fontFamily: `'Biryani', sans-serif`,
  letterSpacing: `-.01em`,
  "@media screen and (max-width: 540px)": {
    fontSize: `1rem`
  }
})

const NotFoundPage = () => {
  const [theme, setTheme] = useState(THEME.light);
  return(
    <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
      <SEO title="Page Not Found" />
      <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
        <MDBContainer fluid style={{ position: `fixed`, display: `fixed`, height: `80%`, width: `100%`, alignItems: `center`, justifyContent: `center`, background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="px-4">
          <MDBRow>
            <MDBCol md="6" lg="6" className="align-self-center">
              <HeaderError>Nothing to see here</HeaderError>
              <SubError>You just hit something that isn't there, sorry for the inconvenience.</SubError>
              <Link to="/">
                  <Button endEnhancer={() => <ArrowRight size={24} />}>
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
              <img className="w-100 hidden-mobile" src={errorImg} alt=""/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </ThemeProvider>
  )
}

export default NotFoundPage
