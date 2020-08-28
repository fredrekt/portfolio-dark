import React, { useState, useEffect } from 'react'
import SEO from '../components/seo'
import HeaderPage from '../components/HeaderPage';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import Navbar from '../components/Navbar';
import { Parallax } from 'react-parallax';
import {styled} from 'baseui';

const THEME = {
    light: 'light',
    dark: 'dark',
};

const AboutPage = () => {
    const initialColor = () => typeof window !== `undefined` && window.localStorage.getItem('themeColor')
    const [theme, setTheme] = useState(initialColor);

    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

    const AboutHeader = styled('h1', {
        fontSize: `3.25rem`,
        lineHeight: `1.4`,
        "@media screen and (max-width: 540px)": {
            fontSize: `2.25rem`
        }
    })

    const AboutContent = styled('p', {
        fontSize: `1.3rem`,
        fontFamily: `'Biryani', sans-serif`,
        "@media screen and (max-width: 540px)": {
            fontSize: `1rem`
        }
    })

    const AboutStyledLink = styled('a', {
        fontSize: `1.3rem`,
        fontFamily: `'Biryani', sans-serif`,
        color: `${theme === 'light' ? "#000" : "#fff"}`,
        textDecoration: `underline`,
        textUnderlinePosition: `under`,
        ":hover":{
            color: `${theme === 'light' ? "#000" : "#fff"}`
        },
        "@media screen and (max-width: 540px)": {
            fontSize: `1rem`
        }
    })

    const LocationContainer = styled('div', {
        width: `50%`,
        marginLeft: `auto`,
        marginRight: `auto`,
        marginTop: `3rem`,
        textAlign: `center`,
        "@media screen and (max-width: 540px)": {
            width: `100%`
        }
    })

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title="About" description="Me, Myself & I. What you need to know about me. Find out where i am and what i do."/>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
            } color={theme}/>
            <MDBContainer fluid className="px-4 pb-5">
                <HeaderPage text="Me, Myself & I"/>
                <MDBRow className="pb-5 pb-lg-0 pb-md-0">
                    <MDBCol>
                        <Parallax
                        strength={800}
                        bgImage={`https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}>
                            <div style={{ height: 400 }}/>
                        </Parallax>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-lg-5 my-0 py-lg-5 py-0">
                    <MDBCol md="6">
                        <AboutHeader>
                            I am a Full Stack Developer, love JavaScript 
                            and also play first person shooter games.
                        </AboutHeader>
                    </MDBCol>
                    <MDBCol md="6">
                        <div className="mt-2">
                            <AboutContent className="lead">
                            Mainly i love react. Would love to learn more about JavaScript. 
                            Absolute would love to discover new technologies and build things 
                            on my own. That's how i learn. Love to playing Apex Legends.
                            Listening to music while i work equals productivity for me. 
                            </AboutContent>
                            <AboutContent className="lead">
                            If you have a project or an idea in mind, don't be shy and send me  
                            a <AboutStyledLink href="/contact">message here</AboutStyledLink>, from there let’s see where it takes us.
                            </AboutContent>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-0 my-lg-5 my-md-5 pt-lg-5 pt-md-5 pt-0">
                    <MDBCol className="my-4 my-lg-0 my-md-0" md="6" lg="6">
                        <img src={`https://images.unsplash.com/photo-1583492207605-884991f34b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80`}
                        className="w-100"
                        alt=""/>
                    </MDBCol>
                    <MDBCol md="6" lg="6">
                        <img src={`https://images.unsplash.com/photo-1591012911207-0dbac31f37da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80`}
                        className="w-100" 
                        alt=""/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="12" lg="12">
                        <div className="my-5">
                            <iframe
                            title="developer's location" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15703.872331734146!2d123.81861022739237!3d10.264155282724873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99d08fc35c237%3A0x9841502ea3d82016!2sLawaan%20III%2C%20Talisay%2C%20Cebu!5e0!3m2!1sen!2sph!4v1595642283821!5m2!1sen!2sph" width="100%" height="400" frameborder="0" style={{"border":0}} allowfullscreen="" aria-hidden="false"></iframe>
                        </div>
                        <LocationContainer>
                            <AboutHeader>
                                Lawaan III - Talisay City, Central Visayas, Philippines
                            </AboutHeader>
                        </LocationContainer>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export default AboutPage
