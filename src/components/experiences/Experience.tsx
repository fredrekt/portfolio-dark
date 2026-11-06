import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Moment from "react-moment"
import { HeadingSmall } from "baseui/typography"
import type { ExperiencesQuery } from "../../types/cms"
import type { Theme } from "../../types/theme"

interface ExperienceProps {
  theme: Theme
}

const yearClass = "mb-1 text-sm font-semibold uppercase tracking-[0.14em]"

const Experience = ({ theme }: ExperienceProps) => {
  const rule =
    theme === "light" ? "border-black" : "border-white"

  const compareDates = (startDate: string, endDate: string) => {
    const startingDate = <Moment format="YYYY">{startDate}</Moment>
    const endingDate = <Moment format="YYYY">{endDate}</Moment>

    if (startDate.toString() === endDate.toString()) {
      return <p className={yearClass}>{startingDate}</p>
    }

    return (
      <p className={yearClass}>
        {startingDate}
        <span> – </span>
        {endingDate}
      </p>
    )
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
        <div>
          {data.gcms.experiences.map(experience => (
            <div key={experience.id} className="my-8 first:mt-0">
              <div className={`resume-container border-l pl-4 ${rule}`}>
                <div className="resume-content">
                  {experience.current && <p className={yearClass}>Current</p>}
                  {experience.startDate !== null &&
                    experience.endDate !== null &&
                    compareDates(experience.startDate, experience.endDate)}
                  <HeadingSmall as="h3" marginTop="0" marginBottom="scale100">{experience.company}</HeadingSmall>
                  <p className="mb-3 text-base">{experience.job}</p>
                  <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed">
                    {experience.jobDescription.map(desc => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    />
  )
}

export default Experience
