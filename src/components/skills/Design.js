import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Design = () => {
  const data = useStaticQuery(graphql`
    query {
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
