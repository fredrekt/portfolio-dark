import React from 'react'
import { StaticQuery } from 'gatsby';

const RightMisc = () => {
    return (
        <StaticQuery 
             query={graphql`
                query{
                    gcms {
                        skills(last: 10, where: {skillCategory_some: {category_contains: "misc"}}, orderBy: id_ASC) {
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

export default RightMisc
