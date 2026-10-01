import React, { useState, useEffect } from 'react'
import { type HeadProps } from 'gatsby'
import { ThemeProvider } from 'baseui';
import SEO from '../components/seo';
import Navbar from '../components/Navbar';
import { MDBContainer, MDBRow } from 'mdbreact';
import HeaderPage from '../components/HeaderPage';
import BlogPreview from '../components/blog/BlogPreview';
import { THEME, getStoredTheme, type Theme } from '../types/theme';
import { siteTheme } from '../theme/site';

const BlogPage = () => {
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
                <HeaderPage text="Blog"/>
            </MDBContainer>
            <MDBContainer fluid className="px-4">
                <MDBRow className="pb-5">
                    {/* <BlogCards/> */}
                    <BlogPreview theme={theme}/>
                </MDBRow>
            </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export const Head = ({ location }: HeadProps) => (
    <SEO
        title="Blog"
        description="Writing by Fred Garingo, a senior full stack developer in Cebu, on building and shipping software."
        image="/og/blog.png"
        pathname={location.pathname}
    />
)

export default BlogPage
