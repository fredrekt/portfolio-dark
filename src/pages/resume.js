import React, { useState } from 'react'
import SEO from '../components/seo'
import Navbar from '../components/Navbar';
import HeaderPage from '../components/HeaderPage';
import { MDBContainer } from 'mdbreact'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';

const THEME = {
    light: 'light',
    dark: 'dark',
};

const ResumePage = () => {
    const [theme, setTheme] = useState(THEME.light);

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title="Resume"/>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
            } color={theme}/>
            <MDBContainer fluid className="px-4">
                <HeaderPage text="My Resume"/>
            </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export default ResumePage
