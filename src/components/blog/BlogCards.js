import React from 'react'
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {StyledLink} from 'baseui/link';
import { useStaticQuery, graphql } from 'gatsby';
import { MDBCol } from 'mdbreact';
import Markdown from 'markdown-to-jsx'

const BlogCards = () => {
    const data = useStaticQuery(graphql`
        query{
            gcms{
                blogs {
                    id
                    content{
                        markdown
                    }
                }
            }
        }
    `)
    return (
        <>
        {data.gcms.blogs.map(blog => 
        <MDBCol className="py-4"md="4" lg="4">
            <Card
                key={blog.id}
                headerImage={blog.preview && blog.preview.url}
                title={blog.title && blog.title}
            >
                <StyledBody>
                    {/* <Markdown>
                        {blog.description && blog.description}
                        {blog.content.markdown}
                    </Markdown> */}
                    <Markdown>
                        {blog.content.markdown}
                    </Markdown>
                </StyledBody>
                <StyledAction>
                <StyledLink
                href={`/blog/${blog.id}`}
                animateUnderline
                >
                Read Blog
                </StyledLink>
                </StyledAction>
            </Card>
        </MDBCol>
        )}
        </>
    )
}

export default BlogCards
