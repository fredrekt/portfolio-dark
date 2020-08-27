import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import { MDBCol } from 'mdbreact'
import Moment from 'react-moment';

const Certificates = ({theme}) => {
    const color = {
        borderLeft: `${theme === 'light' ? "1px solid #000" : "1px solid #fff"}`
    }

    return (
        <StaticQuery 
            query={graphql`
                query{
                    gcms{
                        certificates(orderBy: date_DESC){
                            date
                            company
                            title
                            description
                        }
                    }
                }
            `}
            render={data => (
                <>
                {data.gcms.certificates.map(certificate => 
                <MDBCol className="my-4" md="12" lg="12">
                    <div style={color} className="resume-container">
                        <div style={{ marginLeft: `1rem` }} className="resume-content">
                            <h2>
                                <Moment format="YYYY">
                                    {certificate.date}
                                </Moment>
                            </h2>
                            <h4>{certificate.company}</h4>
                            <h5>{certificate.title}</h5>
                            <ul className="list-unstyled skills-list">
                                {certificate.description.map(desc => <li>{desc}</li>)}
                            </ul>
                        </div>
                    </div>
                </MDBCol>)}
                </>
            )}
        />
    )
}

export default Certificates
