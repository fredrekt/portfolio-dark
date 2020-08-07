import React from 'react'
import { StaticQuery } from 'gatsby';

const Design = () => {
    return (
        <StaticQuery 
             query={graphql`
                query{
                    gcms {
                        skills(where: {skillCategory_some: {category_contains: "design"}}, orderBy: id_ASC) {
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

export default Design
