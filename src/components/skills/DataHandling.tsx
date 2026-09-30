import React from "react"
import { StaticQuery, graphql } from "gatsby"
import type { SkillsQuery } from "../../types/cms"

const DataHandling = () => {
  return (
    <StaticQuery<SkillsQuery>
      query={graphql`
        query DataHandlingSkills {
          gcms {
            skills(
              where: {
                skillCategory_some: { category_contains: "Data Handling" }
              }
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

export default DataHandling
