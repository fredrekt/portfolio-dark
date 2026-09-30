import Markdown from 'markdown-to-jsx'
import { MDBCol } from 'mdbreact'
import React from 'react'

interface BlogBodyProps {
  content: string
}

const BlogBody = ({ content }: BlogBodyProps) => {
    return (
        <>
        <MDBCol md='8' lg='8'>
            <Markdown options={{ overrides: { img: { props: { className: 'img-fluid' } } } }} className="h3-responsive">
                {content}
            </Markdown>
        </MDBCol> 
        </>
    )
}

export default BlogBody
