import React, { useState, useEffect } from 'react' 
import HeaderPage from '../components/HeaderPage'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from 'mdbreact'
import { Parallax } from 'react-parallax'
import SEO from '../components/seo'
import Navbar from '../components/Navbar'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui'
import { styled } from "styletron-react";
import { Button } from "baseui/button";
import ArrowRight from 'baseui/icon/arrow-right';
import { Link } from 'gatsby'
import Work from '../components/works/Work'

const THEME = {
    light: 'light',
    dark: 'dark',
};

const WorksPage = () => {
    const initialColor = () => typeof window !== `undefined` && window.localStorage.getItem('themeColor')
    const [theme, setTheme] = useState(initialColor);
    const [hover, setHover] =useState(false)

    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

    const HeaderFooter = styled('h1', {
        fontSize: `5rem`,
        fontFamily: `'Lato', sans-serif`,
        letterSpacing: `-.01em`,
        "@media screen and (max-width: 540px)":{
            fontSize: `3rem`
        }
    })

    const HeaderFooterContent = styled('p', {
        fontSize: `1.2rem`,
        fontFamily: `'Biryani', sans-serif`,
        "@media screen and (max-width: 540px)":{
            fontSize: `1rem`
        }
    })

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title="Works"/>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
        <MDBContainer fluid className="px-4">
            <HeaderPage text="My Works"/>
            <MDBRow>
                <Work/>
            </MDBRow>
            <MDBRow className="my-5">
                <MDBCol>
                    <Parallax
                        bgImage={`https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
                        strength={500}>
                        <div onFocus={()=>console.log(`focused`)} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{ height: 400, background: hover && "#000", transition: `1s` }}>
                            <div className={`${!hover && 'd-none'} work-container flex-center white-text p-5`}>
                                <MDBAnimation type="slideInUp">
                                <h1 className="h1-responsive">
                                    <span className="mx-lg-4 mx-md-4 mx-0">Code</span>  | 
                                    <span className="mx-lg-4 mx-md-4 mx-2">Play</span>  | 
                                    <span className="mx-lg-4 mx-md-4 mx-2">Gym</span>
                                </h1>
                                </MDBAnimation>
                            </div>
                        </div>
                    </Parallax>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-5">
                <MDBCol md="12" lg="12">
                    <HeaderFooter className="text-center">
                        Got a project in mind?
                    </HeaderFooter>
                    <div className="d-flex flex-column align-items-center">
                        <HeaderFooterContent className="lead text-center">
                            Tell me about it, maybe i can help with it.
                        </HeaderFooterContent>
                        <Link to="/contact">
                            <Button  endEnhancer={() => <ArrowRight size={24} />}>
                                Send Message 
                            </Button>
                        </Link>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export default WorksPage