import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby';
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';
import { MDBContainer, MDBRow } from 'mdbreact';
import BlogHeader from '../components/blog/BlogHeader';
import BlogBody from '../components/blog/BlogBody';
import type { BlogPageQuery } from '../types/cms';
import { THEME, getStoredTheme, type Theme } from '../types/theme';

interface BlogPageProps {
    data: BlogPageQuery
}

const BlogPage = ({ data: { gcms: { blog } } }: BlogPageProps) => {
    const [theme, setTheme] = useState<Theme>(getStoredTheme)

    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
          <MDBContainer fluid className="px-4">
            <MDBRow className="py-5">
                {blog ? (
                  <>
                    <BlogHeader id={blog.id} theme={theme} title={blog.title} date={blog.createdAt} desc={blog.description}/>
                    <BlogBody content={blog.content.markdown}/>
                  </>
                ) : null}
            </MDBRow>
          </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export const pageQuery = graphql`
    query ProductPageQuery($id: ID!){
        gcms{
            blog(where: {id: $id}) {
                blogCategory
                content {
                  markdown
                }
                id
                preview {
                  url
                }
                title
                createdAt
                description
            }
        }
    }
`

export const Head = ({ data }: BlogPageProps) => {
    const blog = data?.gcms?.blog
    return (
        <SEO
            title={blog?.title ?? "Blog"}
            description={blog?.description}
            image={blog?.preview?.url}
        />
    )
}

export default BlogPage
