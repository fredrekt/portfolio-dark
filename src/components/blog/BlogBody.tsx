import Markdown from 'markdown-to-jsx'
import { MDBCol } from 'mdbreact'
import React from 'react'
import { HeadingLarge, HeadingMedium, HeadingXLarge, ParagraphMedium } from 'baseui/typography'

interface BlogBodyProps {
  content: string
}

const BlogBody = ({ content }: BlogBodyProps) => {
    return (
        <>
        <MDBCol md='8' lg='8'>
            <Markdown options={{ overrides: {
                h1: { component: HeadingXLarge, props: { as: "h2" } },
                h2: { component: HeadingLarge },
                h3: { component: HeadingMedium },
                p: { component: ParagraphMedium },
                img: { props: { className: "img-fluid" } },
            } }}>
                {content}
            </Markdown>
        </MDBCol> 
        </>
    )
}

export default BlogBody
