import React, { useState, useEffect } from 'react' 
import HeaderPage from '../components/HeaderPage'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from 'mdbreact'
import { Parallax } from 'react-parallax'
import SEO from '../components/seo'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'baseui'
import { Button } from "baseui/button";
import { HeadingXLarge, ParagraphLarge } from "baseui/typography";
import ArrowRight from 'baseui/icon/arrow-right';
import { Link, type HeadProps } from 'gatsby'
import Work from '../components/works/Work'
import { THEME, getStoredTheme, type Theme } from '../types/theme'
import { pageTitleFont, siteTheme } from '../theme/site'

const WorksPage = () => {
    const [theme, setTheme] = useState<Theme>(getStoredTheme)
    const [hover, setHover] =useState(false)

    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

    return (
        <ThemeProvider theme={siteTheme(theme)}>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
        <MDBContainer fluid className="px-4">
            <HeaderPage text="Selected Work"/>
            <ParagraphLarge maxWidth="36rem" marginTop="0" marginBottom="scale800">
                Product engineering across SaaS, marketplaces, and client platforms.
            </ParagraphLarge>
            <MDBRow>
                <Work/>
            </MDBRow>
            <MDBRow className="my-5">
                <MDBCol>
                    <Parallax
                        bgImage={`https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
                        strength={500}>
                        <div onFocus={()=>console.log(`focused`)} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{ height: 400, background: hover ? "#000" : undefined, transition: `1s` }}>
                            <div className={`${!hover && 'd-none'} work-container flex-center white-text p-5`}>
                                <MDBAnimation type="slideInUp">
                                <HeadingXLarge color="#fff" marginTop="0" marginBottom="0">
                                    <span className="mx-lg-4 mx-md-4 mx-0">Code</span>  | 
                                    <span className="mx-lg-4 mx-md-4 mx-2">Play</span>  | 
                                    <span className="mx-lg-4 mx-md-4 mx-2">Gym</span>
                                </HeadingXLarge>
                                </MDBAnimation>
                            </div>
                        </div>
                    </Parallax>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-5">
                <MDBCol md="12" lg="12">
                    <HeadingXLarge className="text-center" font={pageTitleFont} marginTop="0" marginBottom="scale600">
                        Got a project in mind?
                    </HeadingXLarge>
                    <div className="d-flex flex-column align-items-center">
                        <ParagraphLarge marginTop="0" marginBottom="scale600">
                            Tell me about the product.
                        </ParagraphLarge>
                        <Link to="/contact">
                            <Button endEnhancer={<ArrowRight size={24} />}>
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

export const Head = ({ location }: HeadProps) => (
    <SEO
        title="Selected Work"
        description="Selected product work by Fred Garingo, a senior full stack developer in Cebu. SaaS, marketplaces, sales technology, and client platforms."
        image="/og/works.png"
        pathname={location.pathname}
    />
)

export default WorksPage