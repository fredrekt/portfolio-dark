import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { MDBCol, MDBContainer } from 'mdbreact';
import Markdown from 'markdown-to-jsx';
import {Accordion, Panel} from 'baseui/accordion';
import Moment from 'react-moment';

const BlogCards = () => {
    const data = useStaticQuery(graphql`
        query{
            gcms{
                blogs {
                    id
                    title
                    description
                    createdAt
                    blogCategory
                    content{
                        markdown
                    }
                    preview{
                        url
                    }   
                }
            }
        }
    `)
    
    const blogs = data.gcms.blogs.map(blog => 
        <Panel title={blog.title}>
            <MDBContainer>
                <div className="blog-header">
                    <h1 className="display-3">{blog.title}</h1>
                    <div className="d-flex justify-content-between pb-5">
                        <h3 className="h3-responsive text-capitalize">{blog.blogCategory}</h3>
                        <h3 className="h5-responsive grey-text text-capitalize">
                            <Moment format="MMM DD, YYYY">
                                {blog.createdAt}
                            </Moment>
                        </h3>
                    </div>
                </div>
                <Markdown className="h3-responsive">
                    {blog.content.markdown}
                </Markdown>
            </MDBContainer>
        </Panel>    
    )

    return (
        <>
        <MDBCol size="8">
            <Accordion renderAll>
                {blogs}
            </Accordion>
        </MDBCol>
        </>
    )
}

export default BlogCards
