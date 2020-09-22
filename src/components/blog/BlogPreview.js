import { StyledLink } from 'baseui/link'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { MDBCol } from 'mdbreact'
import React from 'react'
import ProgressiveImage from 'react-progressive-image'

const THEME = {
    light: 'light',
    dark: 'dark',
};

const BlogPreview = ({theme}) => {
    const data = useStaticQuery(graphql`
        query{
            gcms{
                blogs(where: { blogCategory_not: movies }, orderBy: createdAt_DESC){
                   id
                   title
                   description
                   blogCategory
                   preview{
                       url
                   } 
                }
            }
        }
    `)

    const { blogs } = data.gcms

    const blogCollections = blogs.map(blog=> 
        <>
        <MDBCol className="my-4" md="3" lg="3">
            <Link to={`/blog/${blog.id}`}>
                <ProgressiveImage src={blog.preview.url} placeholder="loading image here">
                    {(src, loading) => ( <img src={src} style={{ filter: loading && `blur(5px)` }} alt="blog preview" className="w-100"/> )}
                </ProgressiveImage>
                <div className={`blog-content-preview my-4 ${theme === THEME.light ? "black-text" : "white-text"}`}>
                    <h3 className="h3-responsive">{blog.title}</h3>
                    <p className="lead">{blog.description}</p>
                    <StyledLink animateUnderline href={`/blog/${blog.id}`}>Read Blog</StyledLink>
                </div>
            </Link>
        </MDBCol>
        </>
        )

    return (
        <>
        {blogCollections} 
        </>
    )
}

export default BlogPreview
