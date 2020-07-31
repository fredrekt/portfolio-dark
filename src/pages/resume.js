import React, { useState } from 'react'
import SEO from '../components/seo'
import Navbar from '../components/Navbar';
import HeaderPage from '../components/HeaderPage';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import { styled } from "styletron-react";
import { Accordion, Panel } from "baseui/accordion";

const THEME = {
    light: 'light',
    dark: 'dark',
};

const ResumePage = () => {
    const [theme, setTheme] = useState(THEME.light);

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
                            <MDBCol className="my-4" md="12" lg="12">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h2>2017 - 2020</h2>
                                        <h4>Udemy</h4>
                                        <h5>Advanced React Patterns</h5>
                                        <ul className="list-unstyled skills-list">
                                            <li>Understood Design Patterns</li> 
                                            <li>Becoming Senior React Developer</li>
                                            <li>Master React Components</li>
                                            <li>Built custom hooks</li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="12" lg="12">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h2>2020</h2>
                                        <h4>Udemy</h4>
                                        <h5>Machine Learning with JavaScript</h5>
                                        <ul className="list-unstyled skills-list">
                                            <li>Assembled machine learning algorithms</li> 
                                            <li>Built applications using ml techniques</li>
                                            <li>Learned Tensorflow JS</li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="12" lg="12">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h2>2017 - 2020</h2>
                                        <h4>Udemy</h4>
                                        <h5>Angular - The Complete Guide</h5>
                                        <ul className="list-unstyled skills-list">
                                            <li>Learned TypeScript</li>
                                            <li>Built Angular Web Applications</li>
                                            <li>Became a MEAN Stack </li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="12" lg="12">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h2>2019</h2>
                                        <h4>Impact Hackathon</h4>
                                        <h5>Front-End Developer</h5>
                                        <ul className="list-unstyled skills-list">
                                            <li>Built frontend less than 8 hours</li> 
                                            <li>Used Roads and Geolocation API's</li>
                                            <li>Automated process of Vehicle Clamping</li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" lg="4">
                        <h1 className="mb-4">Experience</h1>
                        <MDBRow>
                            <MDBCol className="my-4" md="12" lg="12">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h2>Current</h2>
                                        <h4>Upwork</h4>
                                        <h5>Full Stack Developer</h5>
                                        <ul className="list-unstyled skills-list">
                                            <li>MERN Stack Development</li> 
                                            <li>CMS Development</li>
                                            <li>Landing Page Creator</li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="12" lg="12">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h2>2019</h2>
                                        <h4>Freelancer</h4>
                                        <h5>Full Stack Developer</h5>
                                        <ul className="list-unstyled skills-list">
                                            <li>Created CRUD Applications</li>
                                            <li>React Developer</li>
                                            <li>PHP Developer</li> 
                                            <li>Programming Tutor</li>
                                            <li>Code Debugger</li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="12" lg="12">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h2>2017 - 2020</h2>
                                        <h4>Symph</h4>
                                        <h5>Full Stack Developer Intern</h5>
                                        <ul className="list-unstyled skills-list">
                                            <li>Worked on frontend</li> 
                                            <li>Learned ReactJS</li>
                                            <li>Google App Engine</li>
                                            <li>Worked on Government Digital Forms</li>
                                            <li>Helped build landing pages</li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="4" lg="4">
                        <h1>Skills</h1>
                        <MDBRow>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        <h4>Frontend</h4>
                                        {/* <h5>Full Stack Developer</h5> */}
                                        <ul className="list-unstyled skills-list">
                                            <li>Sass</li> 
                                            <li>CSS</li>
                                            <li>Material Bootstrap</li>
                                            <li>Styled Components</li>
                                            <li>Styletron</li>
                                            <li>Tailwind CSS</li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        {/* <h2>2017 - 2020</h2> */}
                                        <h4>Backend</h4>
                                        {/* <h5>Full Stack Developer</h5> */}
                                        <ul className="list-unstyled skills-list">
                                            <li>NodeJS</li> 
                                            <li>Php</li>
                                            <li>Python</li>
                                            <li>Strapi</li>
                                            <li>Contentful</li>
                                            <li>Airtable</li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        {/* <h2>2017 - 2020</h2> */}
                                        <h4>Framework & Libraries</h4>
                                        {/* <h5>Full Stack Developer</h5> */}
                                        <ul className="list-unstyled skills-list">
                                            <li>ReactJS</li> 
                                            <li>React Native</li>
                                            <li>Redux</li>
                                            <li>GatsbyJS</li>
                                            <li>AngularJS</li>
                                            <li>VueJS</li>
                                            <li>ExpressJS</li>
                                            <li>Django</li>
                                            <li>Spring Boot</li>
                                            <li>Laravel</li>
                                            <li>Flutter</li>
                                            <li>NextJS</li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        {/* <h2>2017 - 2020</h2> */}
                                        <h4>Data Handling</h4>
                                        {/* <h5>Full Stack Developer</h5> */}
                                        <ul className="list-unstyled skills-list">
                                            <li>MongoDB</li>
                                            <li>GraphQL</li> 
                                            <li>Firestore</li>
                                            <li>PostgreSQL</li>
                                            <li>REST API</li>
                                            <li>JSON</li>
                                            <li>MySQL</li>
                                            <li>SQLite</li>
                                            <li>Firebase</li>
                                            <li>Apollo GraphQL</li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        {/* <h2>2017 - 2020</h2> */}
                                        <h4>Design</h4>
                                        {/* <h5>Full Stack Developer</h5> */}
                                        <ul className="list-unstyled skills-list">
                                            <li>Photoshop</li> 
                                            <li>Adobe XD</li>
                                            <li>Figma</li>
                                            <li>Tailblocks</li>
                                            <li>Lightroom</li>
                                        </ul>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className="my-4" md="6" lg="6">
                                <div style={color} className="resume-container">
                                    <div style={{ marginLeft: `1rem` }} className="resume-content">
                                        {/* <h2>2017 - 2020</h2> */}
                                        <h4>Languages</h4>
                                        {/* <h5>Full Stack Developer</h5> */}
                                        <ul className="list-unstyled skills-list">
                                            <li>Javascript</li> 
                                            <li>TypeScript</li>
                                            <li>Python</li>
                                            <li>PHP</li>
                                            <li>Java</li>
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
                                                            <li>Git</li> 
                                                            <li>Machine Learning</li>
                                                            <li>Wordpress</li>
                                                            <li>Composer</li>
                                                            <li>PayMongo</li>
                                                            <li>Heroku</li>
                                                            <li>Github</li>
                                                            <li>Gatsby Cloud</li>
                                                            <li>Google App Engine</li>
                                                            <li>Netlify</li>
                                                        </ul>
                                                    </MDBCol>
                                                    <MDBCol md="6" lg="6">
                                                        <ul className="list-unstyled skills-list">
                                                            <li>Docker</li> 
                                                            <li>Wondershare Filmora</li>
                                                            <li>Kubernetes</li>
                                                            <li>Blockchain</li>
                                                            <li>Shopify</li>
                                                            <li>Gulp.js</li>
                                                            <li>jQuery</li>
                                                            <li>Yarn</li>
                                                            <li>CLI</li>
                                                            <li>NPM</li>
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
