import React, { useState, useEffect, type ReactNode } from "react"
import { type HeadProps } from "gatsby"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import HeaderPage from "../components/HeaderPage"
import { ThemeProvider } from "baseui"
import { HeadingLarge, HeadingSmall } from "baseui/typography"
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
import { PageShell, PageWidth } from "../components/PageShell"

const SkillBlock = ({
  theme,
  title,
  children,
}: {
  theme: Theme
  title: string
  children: ReactNode
}) => (
  <div
    className={`border-l pl-4 ${
      theme === THEME.light ? "border-black" : "border-white"
    }`}
  >
    <HeadingSmall as="h3" marginTop="0" marginBottom="scale300">
      {title}
    </HeadingSmall>
    <ul className="skills-list">{children}</ul>
  </div>
)

const ResumePage = () => {
  const [theme, setTheme] = useState<Theme>(getStoredTheme)
  const [miscOpen, setMiscOpen] = useState(false)

  useEffect(() => {
    typeof window !== `undefined` &&
      window.localStorage.setItem("themeColor", theme)
  }, [theme])

  return (
    <ThemeProvider theme={siteTheme(theme)}>
      <PageShell theme={theme} className="resume-page">
        <Navbar
          onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          }
          color={theme}
        />
        <PageWidth className="pb-5">
          <HeaderPage text="Resume" />
          <div className="grid gap-12 pb-12 lg:grid-cols-3">
            <section>
              <HeadingLarge as="h2" marginTop="0" marginBottom="scale600">
                Certificates
              </HeadingLarge>
              <Certificates theme={theme} />
            </section>
            <section>
              <HeadingLarge as="h2" marginTop="0" marginBottom="scale600">
                Experience
              </HeadingLarge>
              <Experience theme={theme} />
            </section>
            <section>
              <HeadingLarge as="h2" marginTop="0" marginBottom="scale600">
                Skills
              </HeadingLarge>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                <SkillBlock theme={theme} title="Frontend">
                  <Frontend />
                </SkillBlock>
                <SkillBlock theme={theme} title="Backend">
                  <Backend />
                </SkillBlock>
                <SkillBlock theme={theme} title="Framework & Libraries">
                  <Frameworks />
                </SkillBlock>
                <SkillBlock theme={theme} title="Data Handling">
                  <DataHandling />
                </SkillBlock>
                <SkillBlock theme={theme} title="Design">
                  <Design />
                </SkillBlock>
                <SkillBlock theme={theme} title="Languages">
                  <Languages />
                </SkillBlock>
                <div className="sm:col-span-2 lg:col-span-1">
                  <div
                    className={`border-l pl-4 ${
                      theme === THEME.light ? "border-black" : "border-white"
                    }`}
                  >
                    <HeadingSmall as="h3" marginTop="0" marginBottom="scale300">
                      Misc
                    </HeadingSmall>
                    <button
                      type="button"
                      aria-expanded={miscOpen}
                      onClick={() => setMiscOpen(open => !open)}
                      className="inline-flex items-center gap-2 border-b border-current pb-px text-sm font-medium"
                    >
                      More information
                      <span aria-hidden="true">{miscOpen ? "–" : "+"}</span>
                    </button>
                    {miscOpen ? (
                      <div className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-1">
                        <ul className="skills-list">
                          <LeftMisc />
                        </ul>
                        <ul className="skills-list">
                          <RightMisc />
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </PageWidth>
      </PageShell>
    </ThemeProvider>
  )
}

export const Head = ({ location }: HeadProps) => (
  <SEO
    title="Resume"
    description="Experience and skills of Fred Garingo, a senior full stack developer in Cebu. React, Next.js, TypeScript, Django, Node, cloud, and production AI."
    image="/og/resume.png"
    pathname={location.pathname}
  />
)

export default ResumePage
