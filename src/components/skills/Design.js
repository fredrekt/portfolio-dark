import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

const Design = () => {
    const data = useStaticQuery(graphql`
        query{
            gcms {
                skills(where: {skillCategory_some: {category_contains: "design"}}, orderBy: id_ASC) {
                skill
                }
            }
        }
    `)
    return (
        <>
        {data.gcms.skills.map(skill => <li>{skill.skill}</li>)}
        </>
    )
}

export default Design
