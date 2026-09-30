import React from "react"
import { StaticQuery, graphql } from "gatsby"
import type { SkillsQuery } from "../../types/cms"

const Languages = () => {
  return (
    <StaticQuery<SkillsQuery>
      query={graphql`
        query LanguageSkills {
          gcms {
            skills(
              where: { skillCategory_some: { category_contains: "languages" } }
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

export default Languages
