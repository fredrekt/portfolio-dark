import React, { useState, useEffect } from 'react'
import { type HeadProps } from 'gatsby'
import SEO from '../components/seo'
import HeaderPage from '../components/HeaderPage';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { ThemeProvider, styled } from 'baseui';
import { HeadingXLarge, ParagraphLarge } from 'baseui/typography';
import Navbar from '../components/Navbar';
import { Parallax } from 'react-parallax';
import { THEME, getStoredTheme, type Theme } from '../types/theme';
import { siteTheme, statementFont } from '../theme/site';

const TextLink = styled('a', {
    color: 'inherit',
    textDecoration: 'underline',
    textUnderlinePosition: 'under',
})

const AboutPage = () => {
    const [theme, setTheme] = useState<Theme>(getStoredTheme)

    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

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
        <ThemeProvider theme={siteTheme(theme)}>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
            } color={theme}/>
            <MDBContainer fluid className="px-4 pb-5">
                <HeaderPage text="About"/>
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
                        <HeadingXLarge font={statementFont} marginTop="0" marginBottom="0">
                            I build production-ready products end to end.
                        </HeadingXLarge>
                    </MDBCol>
                    <MDBCol md="6">
                        <div className="mt-2">
                            <ParagraphLarge marginTop="0">
                            Eight years across web and mobile, from the interface through APIs, data, and release. Recent work includes production AI: retrieval, transcript analysis, and product workflows, next to the ordinary work of shipping a feature that holds up.
                            </ParagraphLarge>
                            <ParagraphLarge marginTop="0">
                            The usual stack is React, Next.js, and TypeScript, with Django or Node behind it. If you have a product to build, send a <TextLink href="/contact/">message</TextLink>.
                            </ParagraphLarge>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15703.872331734146!2d123.81861022739237!3d10.264155282724873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99d08fc35c237%3A0x9841502ea3d82016!2sLawaan%20III%2C%20Talisay%2C%20Cebu!5e0!3m2!1sen!2sph!4v1595642283821!5m2!1sen!2sph" width="100%" height="400" frameBorder="0" style={{"border":0}} allowFullScreen aria-hidden="false"></iframe>
                        </div>
                        <LocationContainer>
                            <HeadingXLarge font={statementFont} marginTop="0" marginBottom="0">
                                Lawaan III - Talisay City, Central Visayas, Philippines
                            </HeadingXLarge>
                        </LocationContainer>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export const Head = ({ location }: HeadProps) => (
    <SEO
        title="About"
        description="Senior full stack developer in Cebu. Fred Garingo ships web and mobile products end to end, including production AI, React, Next.js, and backend services."
        pathname={location.pathname}
    />
)

export default AboutPage
