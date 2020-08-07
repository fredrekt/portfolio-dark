import React, { useState, useEffect } from 'react'
import SEO from '../components/seo'
import Navbar from '../components/Navbar';
import HeaderPage from '../components/HeaderPage';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import { Accordion, Panel } from "baseui/accordion";
import Frontend from '../components/skills/Frontend';
import Backend from '../components/skills/Backend';
import Frameworks from '../components/skills/Frameworks';
import DataHandling from '../components/skills/DataHandling';
import Design from '../components/skills/Design';
import Languages from '../components/skills/Languages';
import LeftMisc from '../components/skills/LeftMisc';
import RightMisc from '../components/skills/RightMisc';
import Experience from '../components/experiences/Experience';
import Certificates from '../components/experiences/Certificates';

const THEME = {
    light: 'light',
    dark: 'dark',
};

const ResumePage = () => {
    const initialColor = () => typeof window !== `undefined` && window.localStorage.getItem('themeColor')
    const [theme, setTheme] = useState(initialColor);
   
    useEffect(() => {
        window.localStorage.setItem('themeColor', theme)
    },[theme])

    const color = {
        borderLeft: `${theme === THEME.light ? "1px solid #000" : "1px solid #fff"}`
    }

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title="Resume"/>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
            } color={theme}/>
            <MDBContainer fluid className="px-4">
                <HeaderPage text="My Resume"/>
                <MDBRow>
                    <MDBCol md="4" lg="4">
                        <h1>Certificates</h1>
                        <MDBRow>
                            <Certificates theme={theme}/>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" lg="4">
                        <h1 className="mb-4">Experience</h1>
                        <MDBRow>
                            <Experience theme={theme}/>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" lg="4">
                        <h1>Skills</h1>
                        <MDBRow>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h4>Frontend</h4>
                                        <ul className="list-unstyled skills-list">
                                            <Frontend/>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h4>Backend</h4>
                                        <ul className="list-unstyled skills-list">
                                            <Backend/>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h4>Framework & Libraries</h4>
                                        <ul className="list-unstyled skills-list">
                                            <Frameworks/>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h4>Data Handling</h4>
                                        <ul className="list-unstyled skills-list">
                                            <DataHandling/>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h4>Design</h4>
                                        <ul className="list-unstyled skills-list">
                                            <Design/>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h4>Languages</h4>
                                        <ul className="list-unstyled skills-list">
                                            <Languages/>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="12" lg="12">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h4>Misc</h4>
                                        <Accordion>
                                            <Panel title="More information">
                                                <MDBRow>
                                                    <MDBCol md="6" lg="6">
                                                        <ul className="list-unstyled skills-list">
                                                            <LeftMisc/>
                                                        </ul>
                                                    </MDBCol>
                                                    <MDBCol md="6" lg="6">
                                                        <ul className="list-unstyled skills-list">
                                                            <RightMisc/>
                                                        </ul>
                                                    </MDBCol>
                                                </MDBRow>
                                            </Panel>
                                        </Accordion>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export default ResumePage
