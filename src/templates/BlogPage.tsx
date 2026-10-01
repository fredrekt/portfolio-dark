import React, { useState, useEffect } from 'react'
import { graphql, type HeadProps } from 'gatsby';
import { ThemeProvider } from 'baseui';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';
import { MDBContainer, MDBRow } from 'mdbreact';
import BlogHeader from '../components/blog/BlogHeader';
import BlogBody from '../components/blog/BlogBody';
import type { BlogPageQuery } from '../types/cms';
import { THEME, getStoredTheme, type Theme } from '../types/theme';
import { siteTheme } from '../theme/site';

interface BlogPageProps {
    data: BlogPageQuery
}

const BlogPage = ({ data: { gcms: { blog } } }: BlogPageProps) => {
    const [theme, setTheme] = useState<Theme>(getStoredTheme)

    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

    return (
        <ThemeProvider theme={siteTheme(theme)}>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
          <MDBContainer fluid className="px-4">
            {blog ? (
              <article>
                <MDBRow className="py-5">
                    <BlogHeader id={blog.id} theme={theme} title={blog.title} date={blog.createdAt} desc={blog.description}/>
                    <BlogBody content={blog.content.markdown}/>
                </MDBRow>
              </article>
            ) : null}
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
                  shareImage: url(
                    transformation: {
                      image: { resize: { width: 1200, height: 630, fit: crop } }
                    }
                  )
                }
                title
                createdAt
                description
            }
        }
    }
`

export const Head = ({ data, location }: HeadProps<BlogPageQuery>) => {
    const blog = data?.gcms?.blog
    return (
        <SEO
            title={blog?.title ?? "Blog"}
            description={blog?.description}
            image={blog?.preview?.shareImage ?? blog?.preview?.url}
            imageSize={blog?.preview?.shareImage ? { width: 1200, height: 630 } : undefined}
            pathname={location.pathname}
            type="article"
            publishedAt={blog?.createdAt}
        />
    )
}

export default BlogPage
