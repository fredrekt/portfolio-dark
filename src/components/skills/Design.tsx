import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import type { SkillsQuery } from "../../types/cms"

const Design = () => {
  const data = useStaticQuery<SkillsQuery>(graphql`
    query DesignSkills {
      gcms {
        skills(
          where: { skillCategory_some: { category_contains: "design" } }
          orderBy: id_ASC
        ) {
          id
          skill
        }
      }
    }
  `)
  return (
    <>
      {data.gcms.skills.map(skill => (
        <li key={skill.id}>{skill.skill}</li>
      ))}
    </>
  )
}

export default Design
