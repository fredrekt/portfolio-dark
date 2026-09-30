import React from "react"
import { StaticQuery, graphql } from "gatsby"
import type { SkillsQuery } from "../../types/cms"

const Frontend = () => (
  <StaticQuery<SkillsQuery>
    query={graphql`
      query FrontendSkills {
        gcms {
          skills(
            where: { skillCategory_every: { category_contains: "frontend" } }
            orderBy: id_ASC
          ) {
            id
            skill
          }
        }
      }
    `}
    render={data => (
      <>
        {data.gcms.skills.map(skill => (
          <li key={skill.id}>{skill.skill}</li>
        ))}
      </>
    )}
  />
)

export default Frontend
