import React, { useState, useEffect } from "react"
import { type HeadProps } from "gatsby"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import HeaderPage from "../components/HeaderPage"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { ThemeProvider } from "baseui"
import { HeadingLarge, HeadingSmall } from "baseui/typography"
import { Accordion, Panel } from "baseui/accordion"
import Frontend from "../components/skills/Frontend"
import Backend from "../components/skills/Backend"
import Frameworks from "../components/skills/Frameworks"
import DataHandling from "../components/skills/DataHandling"
import Design from "../components/skills/Design"
import Languages from "../components/skills/Languages"
import LeftMisc from "../components/skills/LeftMisc"
import RightMisc from "../components/skills/RightMisc"
import Experience from "../components/experiences/Experience"
import Certificates from "../components/experiences/Certificates"
import { THEME, getStoredTheme, type Theme } from "../types/theme"
import { siteTheme } from "../theme/site"

const ResumePage = () => {
  const [theme, setTheme] = useState<Theme>(getStoredTheme)

  useEffect(() => {
    typeof window !== `undefined` &&
      window.localStorage.setItem("themeColor", theme)
  }, [theme])

  const color = {
    borderLeft: `${
      theme === THEME.light ? "1px solid #000" : "1px solid #fff"
    }`,
  }

  return (
    <ThemeProvider theme={siteTheme(theme)}>
      <div
        style={{
          background: theme === THEME.light ? "#fff" : "#000",
          color: theme === THEME.light ? "#000" : "#fff",
          minHeight: "100vh",
        }}
        className="wrapper"
      >
        <Navbar
          onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          }
          color={theme}
        />
        <MDBContainer fluid className="resume-page px-4 pb-5">
          <HeaderPage text="Resume" />
          <MDBRow className="pb-5">
            <MDBCol md="4" lg="4">
              <HeadingLarge as="h2" marginTop="0" marginBottom="scale600">Certificates</HeadingLarge>
              <MDBRow>
                <Certificates theme={theme} />
              </MDBRow>
            </MDBCol>
            <MDBCol md="4" lg="4">
              <HeadingLarge as="h2" marginTop="0" marginBottom="scale600">Experience</HeadingLarge>
              <MDBRow>
                <Experience theme={theme} />
              </MDBRow>
            </MDBCol>
            <MDBCol md="4" lg="4">
              <HeadingLarge as="h2" marginTop="0" marginBottom="scale600">Skills</HeadingLarge>
              <MDBRow>
                <MDBCol className="my-4" md="6" lg="6">
                  <div style={color} className="resume-container">
                    <div
                      style={{ marginLeft: `1rem` }}
                      className="resume-content"
                    >
                      <HeadingSmall as="h3" marginTop="0" marginBottom="scale300">Frontend</HeadingSmall>
                      <ul className="list-unstyled skills-list">
                        <Frontend />
                      </ul>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol className="my-4" md="6" lg="6">
                  <div style={color} className="resume-container">
                    <div
                      style={{ marginLeft: `1rem` }}
                      className="resume-content"
                    >
                      <HeadingSmall as="h3" marginTop="0" marginBottom="scale300">Backend</HeadingSmall>
                      <ul className="list-unstyled skills-list">
                        <Backend />
                      </ul>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol className="my-4" md="6" lg="6">
                  <div style={color} className="resume-container">
                    <div
                      style={{ marginLeft: `1rem` }}
                      className="resume-content"
                    >
                      <HeadingSmall as="h3" marginTop="0" marginBottom="scale300">Framework & Libraries</HeadingSmall>
                      <ul className="list-unstyled skills-list">
                        <Frameworks />
                      </ul>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol className="my-4" md="6" lg="6">
                  <div style={color} className="resume-container">
                    <div
                      style={{ marginLeft: `1rem` }}
                      className="resume-content"
                    >
                      <HeadingSmall as="h3" marginTop="0" marginBottom="scale300">Data Handling</HeadingSmall>
                      <ul className="list-unstyled skills-list">
                        <DataHandling />
                      </ul>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol className="my-4" md="6" lg="6">
                  <div style={color} className="resume-container">
                    <div
                      style={{ marginLeft: `1rem` }}
                      className="resume-content"
                    >
                      <HeadingSmall as="h3" marginTop="0" marginBottom="scale300">Design</HeadingSmall>
                      <ul className="list-unstyled skills-list">
                        <Design />
                      </ul>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol className="my-4" md="6" lg="6">
                  <div style={color} className="resume-container">
                    <div
                      style={{ marginLeft: `1rem` }}
                      className="resume-content"
                    >
                      <HeadingSmall as="h3" marginTop="0" marginBottom="scale300">Languages</HeadingSmall>
                      <ul className="list-unstyled skills-list">
                        <Languages />
                      </ul>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol className="my-4" md="12" lg="12">
                  <div style={color} className="resume-container">
                    <div
                      style={{ marginLeft: `1rem` }}
                      className="resume-content"
                    >
                      <HeadingSmall as="h3" marginTop="0" marginBottom="scale300">Misc</HeadingSmall>
                      <Accordion>
                        <Panel title="More information">
                          <MDBRow>
                            <MDBCol md="6" lg="6">
                              <ul className="list-unstyled skills-list">
                                <LeftMisc />
                              </ul>
                            </MDBCol>
                            <MDBCol md="6" lg="6">
                              <ul className="list-unstyled skills-list">
                                <RightMisc />
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

export const Head = ({ location }: HeadProps) => (
  <SEO
    title="Resume"
    description="Experience and skills of Fred Garingo, a senior full stack developer in Cebu. React, Next.js, TypeScript, Django, Node, cloud, and production AI."
    pathname={location.pathname}
  />
)

export default ResumePage
