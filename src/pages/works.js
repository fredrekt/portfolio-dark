import React, { useState, useEffect } from 'react' 
import HeaderPage from '../components/HeaderPage'
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation } from 'mdbreact'
import { Parallax } from 'react-parallax'
import SEO from '../components/seo'
import Navbar from '../components/Navbar'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui'
import { styled } from "styletron-react";
import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";
import ArrowRight from 'baseui/icon/arrow-right';
import { Link } from 'gatsby'

const THEME = {
    light: 'light',
    dark: 'dark',
};

// const WorkContainer = styled("div", props => ({
//     color: `#fff`,
//     transition: `1s`,
//     cursor: `pointer`,
//     ":hover": {
//         color: `#fff`,
//         background: '#000',
//         //border: `1px solid #fff`
//     }
// }))

const Content = styled('p', props => ({
    fontSize: `1.2rem`,
    fontFamily: `'Biryani', sans-serif`,
    color: `#fff`
}))

const WorksPage = () => {
    const [theme, setTheme] = useState(localStorage.getItem('themeColor') === THEME.light ? THEME.light : THEME.dark);
    const [hover, setHover] =useState(false)

    useEffect(() => {
        if(typeof window !== 'undefined'){
            localStorage.setItem('themeColor', theme)
        }            
    }, [theme])

    const content = {
        fontSize: `1.2rem`,
        fontFamily: `'Biryani', sans-serif`
    }

    const header = {
        fontSize: `5rem`,
        fontFamily: `'Lato', sans-serif`,
        letterSpacing: `-.01em`
    }

    const arrow = <ArrowRight size={32} />

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
                <MDBCol className="mb-5" md="6" lg="6">
                    <MDBView waves zoom>
                        <img src={`https://images.pexels.com/photos/2781195/pexels-photo-2781195.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} alt="" className="w-100"/>
                        <MDBMask className="flex-center" overlay="black-strong">
                            <div className="content-container white-text p-5">
                                <h1 className="mb-4">Dossiere</h1>
                                <Content className="lead mb-4">
                                    This project was a personal one for me. 
                                    Trying to build a tool that will help 
                                    starting professionals/individuals 
                                    to have a Digital Portfolio and resume.
                                    Developed the CMS by myself, cause i can.
                                    Actually free and no membership costs.
                                    Hopefully it'll help lots of starting 
                                    freelancers out there.
                                </Content>
                                <StyledLink animateUnderline style={content} className="white-text" href={`https://dossiere.herokuapp.com/`}>
                                    See live {arrow}
                                </StyledLink>
                            </div>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol className="mb-5" md="6" lg="6">
                    <MDBView waves zoom>
                        <img src={`https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} alt="" className="w-100"/>
                        <MDBMask className="flex-center" overlay="black-strong">
                            <div className="content-container white-text p-5">
                                <h1 className="mb-4">Corona Virus Tracker</h1>
                                <Content className="lead mb-4">
                                    This project was more like a hackathon for me. 
                                    I was trying to help people to be informed and 
                                    lessen the panic about the corona virus outbreak,
                                    by just showing the cases/data in which country 
                                    they reside. Also promoted this web application to 
                                    react out and connect with people to pray together 
                                    in this time of crisis.
                                </Content>
                                <StyledLink animateUnderline style={content} className="white-text" href={`https://coronacountrytracker.netlify.app/`}>
                                    See live {arrow}
                                </StyledLink>
                            </div>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol className="mb-5" md="6" lg="6">
                    <MDBView waves zoom>
                        <img src="https://images.pexels.com/photos/1226721/pexels-photo-1226721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="w-100"/>
                        <MDBMask className="flex-center" overlay="black-strong">
                            <div className="content-container white-text p-5">
                                <h1 className="mb-4">Digital Portfolio</h1>
                                <Content className="lead mb-4">
                                    Built a Digital Portfolio for a client. A simple
                                    & minimal design for her website. Took less than a 
                                    week for me to develop, it was kinda easy especially
                                    the client knows the fundamentals of design, and was 
                                    straight forward to my work. Which really helped me
                                    a lot to finish the project quickly and proudly. 
                                    Go check it out!
                                </Content>
                                <StyledLink animateUnderline style={content} className="white-text" href={`https://www.joygaringo.com/`}>
                                    See live {arrow}
                                </StyledLink>
                            </div>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol className="mb-5" md="6" lg="6">
                    <MDBView waves zoom>
                        <img src="https://images.pexels.com/photos/3602778/pexels-photo-3602778.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="w-100"/>
                        <MDBMask className="flex-center" overlay="black-strong">
                            <div className="content-container white-text p-5">
                                <h1 className="mb-4">Medishop</h1>
                                <Content className="lead mb-4">
                                    Our thesis project, first time i've ever used 
                                    ReactJS into a real project. This was a challenge 
                                    for me, time was closing in and we've had a lot of
                                    revisions but we pulled it through despite i'm the 
                                    frontend developer full time and backend. Made with 
                                    love and passion, loved JavaScript instantly.
                                </Content>
                                <StyledLink animateUnderline style={content} className="white-text" href={`https://medishop.netlify.app/`}>
                                    See live {arrow}
                                </StyledLink>
                            </div>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
            </MDBRow>
            <MDBRow className="my-5">
                <MDBCol>
                    <Parallax
                        bgImage={`https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
                        strength={500}>
                        <div onFocus={()=>console.log(`focused`)} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{ height: 400, background: hover && "#000", transition: `1s` }}>
                            <div className={`${!hover && 'd-none'} work-container flex-center white-text p-5`}>
                                <MDBAnimation type="slideInUp">
                                <h1>
                                    <span className="mx-4">Code</span>  | 
                                    <span className="mx-4">Play</span>  | 
                                    <span className="mx-4">Gym</span>
                                </h1>
                                </MDBAnimation>
                            </div>
                        </div>
                    </Parallax>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-5">
                <MDBCol md="12" lg="12">
                    <h1 className="text-center" style={header}>
                        Got a project in mind?
                    </h1>
                    <div className="d-flex flex-column align-items-center">
                        <p style={content} className="lead">
                            Tell me about it, maybe i can help with it.
                        </p>
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