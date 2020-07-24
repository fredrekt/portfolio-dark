import React, { useState } from 'react'
import HeaderPage from '../components/HeaderPage'
import { MDBContainer } from 'mdbreact'
import SEO from '../components/seo'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import Navbar from '../components/Navbar';

const THEME = {
    light: 'light',
    dark: 'dark',
};

const ContactPage = () => {
    const [theme, setTheme] = useState(THEME.light);

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title="Contact"/>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
            <MDBContainer fluid className="px-4">
                <HeaderPage text="Get in Touch"/>
            </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export default ContactPage
