import React from "react"
import { StaticQuery, graphql } from "gatsby"
import type { SkillsQuery } from "../../types/cms"

const Backend = () => {
  return (
    <StaticQuery<SkillsQuery>
      query={graphql`
        query BackendSkills {
          gcms {
            skills(
              where: { skillCategory_some: { category_contains: "backend" } }
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
}

export default Backend
