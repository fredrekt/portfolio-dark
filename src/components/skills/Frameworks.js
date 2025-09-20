import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Frameworks = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          gcms {
            skills(
              where: { skillCategory_some: { category_contains: "framework" } }
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

export default Frameworks
