import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { MDBCol, MDBView, MDBMask } from 'mdbreact'
import ArrowRight from 'baseui/icon/arrow-right';
import { styled } from "styletron-react";
import { StyledLink } from "baseui/link";
import ProgressiveImage from 'react-progressive-image'

const Content = styled('p', props => ({
    fontSize: `1.2rem`,
    fontFamily: `'Biryani', sans-serif`,
    color: `#fff`
}))

const Work = () => {
    const data = useStaticQuery(graphql`
        query{
            gcms{
                works(orderBy: createdAt_DESC){
                    project
                    link
                    description
                    previewImage{
                        previewImageWork {
                            previewImage {
                                url(transformation: {image: {resize: {height: 5, width: 5}}})
                            }
                        }
                        url
                    }
                }
            }
        }
    `)
    const arrow = <ArrowRight size={32} />

    return (
        <>
        {data.gcms.works.map(work => 
        <MDBCol className="mb-5" md="6" lg="6">
            <MDBView zoom className="h-100">
                {work.previewImage.previewImageWork.map(previewImage =>
                    <ProgressiveImage className="w-100 h-100" src={work.previewImage.url} placeholder={previewImage.previewImage.url}>
                    {(src, loading) => (<img style={{ filter: loading && `blur(5px)` }} className="w-100 h-100" src={src} alt="work preview alternative"/>)}
                </ProgressiveImage>
                )}
                <MDBMask className="flex-center" overlay="black-strong">
                    <div className="content-container white-text p-5">
                        <h1 className="h1-responsive mb-lg-4 mb-md-4 mb-2">{work.project}</h1>
                        <Content className="lead mb-md-4 mb-2 mb-lg-4">
                            {work.description}
                        </Content>
                        <StyledLink animateUnderline className="content-container-link white-text" href={work.link}>
                            See live {arrow}
                        </StyledLink>
                    </div>
                </MDBMask>
            </MDBView>
        </MDBCol>
        )}
        </>
    )
}

export default Work
