import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby';
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';
import { MDBContainer, MDBRow } from 'mdbreact';
import BlogHeader from '../components/blog/BlogHeader';
import BlogBody from '../components/blog/BlogBody';

const THEME = {
    light: 'light',
    dark: 'dark',
};

const BlogPage = ({data: {gcms: {blog}}}) => {
    const initialColor = () => typeof window !== `undefined` && window.localStorage.getItem('themeColor') || 'light'
    const [theme, setTheme] = useState(initialColor);

    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title={blog.title} description={blog.description}/>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
          <MDBContainer fluid className="px-4">
            <MDBRow className="my-5">
                <BlogHeader title={blog.title} date={blog.createdAt} category={blog.blogCategory} desc={blog.description}/>
                <BlogBody content={blog.content.markdown}/>
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

export default BlogPage
