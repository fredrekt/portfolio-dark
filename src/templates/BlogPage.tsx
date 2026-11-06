import React, { useState, useEffect } from 'react'
import { graphql, type HeadProps } from 'gatsby';
import { ThemeProvider } from 'baseui';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';
import BlogHeader from '../components/blog/BlogHeader';
import BlogBody from '../components/blog/BlogBody';
import type { BlogPageQuery } from '../types/cms';
import { THEME, getStoredTheme, type Theme } from '../types/theme';
import { siteTheme } from '../theme/site';
import { PageShell, PageWidth } from '../components/PageShell';

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
        <PageShell theme={theme}>
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
          <PageWidth>
            {blog ? (
              <article className="grid gap-10 py-12 md:grid-cols-12">
                    <BlogHeader id={blog.id} theme={theme} title={blog.title} date={blog.createdAt} desc={blog.description}/>
                    <BlogBody content={blog.content.markdown}/>
              </article>
            ) : null}
          </PageWidth>
        </PageShell>
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
