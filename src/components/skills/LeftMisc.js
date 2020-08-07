import React from 'react'
import { StaticQuery } from 'gatsby';

const LeftMisc = () => {
    return (
        <StaticQuery 
             query={graphql`
                query{
                    gcms {
                        skills(first: 10, where: {skillCategory_some: {category_contains: "misc"}}, orderBy: id_ASC) {
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

export default LeftMisc
