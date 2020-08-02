import React, { useState } from "react"
import SEO from "../components/seo"
import {LightTheme, ThemeProvider, DarkTheme} from 'baseui';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {styled} from 'baseui';
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
  height: `80%`,
  width: `100%`,
  display: `flex`,
  position: `fixed`,
  alignItems: `center`,
  justifyContent: `center`
}))

const IndexPage = () => {
  const selectedTheme =  localStorage.getItem('themeColor')
  const [theme, setTheme] = useState(selectedTheme);
  localStorage.setItem('themeColor', theme)
  
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
