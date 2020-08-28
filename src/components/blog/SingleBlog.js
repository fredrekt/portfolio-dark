import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Navbar from '../Navbar';
import SEO from '../seo';
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Parallax } from 'react-parallax';
import Markdown from 'markdown-to-jsx';
import Moment from 'react-moment';

const THEME = {
    light: 'light',
    dark: 'dark',
};

const SingleBlog = ({id}) => {
    const initialColor = () => typeof window !== `undefined` && window.localStorage.getItem('themeColor');
    const [theme, setTheme] = useState(initialColor);

    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

    const data = useStaticQuery(graphql`
        query{
            gcms{
                blog(where: {id: "ckecktvko0hyu0186eactwa44"}) {
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
    `)

    const { blog } = data.gcms

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title={blog.title} description={blog.description}/>
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
          <MDBContainer fluid className="px-4 pb-5">
              <div className="header-container py-4">
                <h1 className="display-1">{blog.title}</h1>
                <MDBRow>
                    <MDBCol md="5" lg="5">
                        <h1 className="h1-responsive text-capitalize">{blog.blogCategory}</h1>
                    </MDBCol>
                    <MDBCol md="4" lg="4">
                        <h1 className="h1-responsive">
                            <Moment format="MMM DD, YYYY">
                                {blog.createdAt}
                            </Moment>
                        </h1>
                    </MDBCol>
                </MDBRow>
              </div>
              <MDBRow className="py-4">
                  <MDBCol>
                      <Parallax
                      strength={800} bgImage={blog.preview.url}  >
                          <div style={{ height: 400 }}></div>
                      </Parallax>
                  </MDBCol>
              </MDBRow>
              <MDBRow className="align-items-center py-4">
                  <MDBCol md="8" lg="8">
                    <Markdown className="h3-responsive">
                        {blog.content.markdown}
                    </Markdown>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
        </ThemeProvider>
    )
}

export default SingleBlog
