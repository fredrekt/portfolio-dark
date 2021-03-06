import React, { useState, useEffect } from 'react'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import SEO from '../components/seo';
import Navbar from '../components/Navbar';
import { MDBContainer, MDBRow } from 'mdbreact';
import HeaderPage from '../components/HeaderPage';
import BlogPreview from '../components/blog/BlogPreview';

const THEME = {
    light: 'light',
    dark: 'dark',
};

const BlogPage = () => {
    const initialColor = () => typeof window !== `undefined` && window.localStorage.getItem('themeColor') || 'light'
    const [theme, setTheme] = useState(initialColor);

    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title="Blog" description="Read blogs about technology, development, PWA."/>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
            } color={theme}/>
            <MDBContainer fluid className="px-4">
                <HeaderPage text="Blogs"/>
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

export default BlogPage
