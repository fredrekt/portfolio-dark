import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDBCol } from "mdbreact"
import Moment from "react-moment"
import { HeadingSmall, HeadingXSmall, HeadingMedium } from "baseui/typography"
import type { ExperiencesQuery } from "../../types/cms"
import type { Theme } from "../../types/theme"

interface ExperienceProps {
  theme: Theme
}

const Experience = ({ theme }: ExperienceProps) => {
  const color = {
    borderLeft: `${theme === "light" ? "1px solid #000" : "1px solid #fff"}`,
  }

  const compareDates = (startDate: string, endDate: string) => {
    const startingDate = <Moment format="YYYY">{startDate}</Moment>
    const endingDate = <Moment format="YYYY">{endDate}</Moment>

    if (startDate.toString() === endDate.toString()) {
      return (
        <>
          <HeadingMedium as="h3" marginTop="0" marginBottom="scale200">{startingDate}</HeadingMedium>
        </>
      )
    } else {
      return (
        <>
          <HeadingMedium as="h3" marginTop="0" marginBottom="scale200">
            {startingDate}
            <span> - </span>
            {endingDate}
          </HeadingMedium>
        </>
      )
    }
  }

  return (
    <StaticQuery<ExperiencesQuery>
      query={graphql`
        query Experiences {
          gcms {
            experiences(orderBy: startDate_DESC) {
              id
              current
              startDate
              endDate
              company
              job
              jobDescription
            }
          }
        }
      `}
      render={data => (
        <>
          {data.gcms.experiences.map(experience => (
            <MDBCol key={experience.id} className="my-4" md="12" lg="12">
              <div style={color} className="resume-container">
                <div style={{ marginLeft: `1rem` }} className="resume-content">
                  {experience.current && (
                    <HeadingMedium as="h3" marginTop="0" marginBottom="scale200">Current</HeadingMedium>
                  )}
                  {experience.startDate !== null &&
                    experience.endDate !== null &&
                    compareDates(experience.startDate, experience.endDate)}
                  <HeadingSmall as="h4" marginTop="0" marginBottom="scale100">{experience.company}</HeadingSmall>
                  <HeadingXSmall as="h5" marginTop="0" marginBottom="scale300">{experience.job}</HeadingXSmall>
                  <ul className="list-unstyled skills-list">
                    {experience.jobDescription.map(desc => (
                      <li>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </MDBCol>
          ))}
        </>
      )}
    />
  )
}

export default Experience
