import React from 'react'
import { StaticQuery, graphql } from 'gatsby';

const Backend = () => {
    return (
        <StaticQuery 
            query={graphql`
                query{
                    gcms {
                        skills(where: {skillCategory_some: {category_contains: "backend"}}, orderBy: id_ASC) {
                        skill
                        }
                    }
                }
            `}
            render={data => (
                <>
                {data.gcms.skills.map(skill => <li>{skill.skill}</li>)}
                </>
            )}
        />
    )
}

export default Backend
