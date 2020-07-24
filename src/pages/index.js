import React, { useState } from "react"
import { Link } from "gatsby"
import { useStyletron } from "styletron-react";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import navbar from "../components/Navbar"
import { Button } from "baseui/button";
import Lottie from 'lottie-react-web' 
import {LightTheme, ThemeProvider, DarkTheme} from 'baseui';
import arrowDown from '../assets/animations/scrollDown.json'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn, MDBContainer } from 'mdbreact'
import { StyledLink } from "baseui/link";
import {styled} from 'baseui';
import BlackContainer from "../components/BlackContainer";
import {Checkbox, STYLE_TYPE} from 'baseui/checkbox';
import Navbar from "../components/Navbar";

const THEME = {
  light: 'light',
  dark: 'dark',
};

const HeroHeader = styled('h1', ({$theme}) => ({
  fontSize: `10rem`,
  fontFamily: `'Playball', cursive!important`,
  textAlign: `center`,
  fontWeight: `900`,
}));

const HeroContainer = styled('div', ({$theme}) => ({
  height: `100%`,
  width: `100%`,
  display: `flex`,
  position: `absolute`,
  alignItems: `center`,
  justifyContent: `center`
}))

const IndexPage = () => {
  const [theme, setTheme] = useState(THEME.light);
  const [checkboxes, setCheckboxes] = useState([
    false,
    false,
  ]);
  
  return(
    <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
    <SEO title="Home" />  
      <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
        {/* <Button
          onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          }
        >
          {theme === THEME.light ? "toggle dark" : "toggle light"}
        </Button> */}
        <HeroContainer style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }}>
          <HeroHeader>
            Fred Garingo
          </HeroHeader>
        </HeroContainer>
      </div>
    </ThemeProvider>
  )
}

export default IndexPage
