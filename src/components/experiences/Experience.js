import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { MDBCol } from 'mdbreact'
import Moment from 'react-moment';

const Experience = ({theme}) => {
    const color = {
        borderLeft: `${theme === 'light' ? "1px solid #000" : "1px solid #fff"}`
    }

    const compareDates = (startDate, endDate) => {
        const startingDate = ( <Moment format="YYYY">{startDate}</Moment> )
        const endingDate = ( <Moment format="YYYY">{endDate}</Moment> )

        if(startDate.toString() === endDate.toString()){
           return(
               <>
                <h2>{startingDate}</h2>
               </>
           )
        }
        else{
            return(
                <>
                <h2>
                    {startingDate} 
                    <span> - </span>
                    {endingDate}
                </h2>
                </>
            )
        }
    }
    
    return (
        <StaticQuery 
            query={graphql`
                query{
                    gcms{
                        experiences(orderBy: startDate_DESC){
                            current
                            startDate
                            endDate
                            company
                            job
                            jobDescription
                        }
                    }
                }
            `}
            render={data => (
                <>
                {data.gcms.experiences.map(experience => 
                <MDBCol className="my-4" md="12" lg="12">
                    <div style={color} className="resume-container">
                        <div style={{ marginLeft: `1rem` }} className="resume-content">
                            {experience.current && (<h2>Current</h2>)}
                            {experience.startDate !== null && experience.endDate !==null && compareDates(experience.startDate, experience.endDate)}
                            <h4>{experience.company}</h4>
                            <h5>{experience.job}</h5>
                            <ul className="list-unstyled skills-list">
                                {experience.jobDescription.map(desc => <li>{desc}</li>)}
                            </ul>
                        </div>
                    </div>
                </MDBCol>)}
                </>
            )}
        />
    )
}

export default Experience
