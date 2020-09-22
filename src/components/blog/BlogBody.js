import Markdown from 'markdown-to-jsx'
import { MDBCol } from 'mdbreact'
import React from 'react'

const BlogBody = ({content}) => {
    return (
        <>
        <MDBCol md='8' lg='8'>
            <Markdown className="h3-responsive">
                {content}
            </Markdown>
        </MDBCol> 
        </>
    )
}

export default BlogBody
