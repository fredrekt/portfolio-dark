import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import navbar from '../components/Navbar'
import { Link } from "gatsby";
import HeaderPage from '../components/HeaderPage';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import Navbar from '../components/Navbar';
import { Parallax } from 'react-parallax';

const THEME = {
    light: 'light',
    dark: 'dark',
};

const AboutPage = () => {
    const [theme, setTheme] = useState(THEME.light);

    const content = {
        fontSize: `1.3rem`,
        fontFamily: `'Biryani', sans-serif`
    }

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title="About"/>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
            <MDBContainer fluid className="px-4 pb-5">
                <HeaderPage text="Me, Myself & I"/>
                <MDBRow>
                    <MDBCol>
                        <Parallax
                        strength={800}
                        bgImage={`https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}>
                            <div style={{ height: 400 }}/>
                        </Parallax>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-5 py-5">
                    <MDBCol md="6">
                        <h1 style={{ fontSize: `3.25rem`, lineHeight: `1.4` }}>
                            Hungry Sandwich Club is a creative studio specialising in motion 
                            and digital design.
                        </h1>
                    </MDBCol>
                    <MDBCol md="6">
                        <div className="mt-2">
                            <p style={content} className="lead">
                            We tell stories. We build experiences. We explore all the ways 
                            design can make us smile, scream, sing and think, understand and 
                            care. We are interested in the whole journey. The big questions. 
                            The tiny details. I am a Full Stack Developer.
                            </p>
                            <p style={content} className="lead">
                            If you have a project or an idea in mind, say hello or call us +44 (0) 7972096337, and let’s see where it takes us.
                            </p>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-5 pt-5">
                    <MDBCol md="6" lg="6">
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15703.872331734146!2d123.81861022739237!3d10.264155282724873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99d08fc35c237%3A0x9841502ea3d82016!2sLawaan%20III%2C%20Talisay%2C%20Cebu!5e0!3m2!1sen!2sph!4v1595642283821!5m2!1sen!2sph" width="100%" height="400" frameborder="0" style={{"border":0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        <div className="mt-5 mx-auto text-center w-50">
                            <h1 style={{ fontSize: `3.25rem`, lineHeight: `1.4` }}>
                                Lawaan III - Talisay City, Central Visayas, Philippines
                            </h1>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export default AboutPage
