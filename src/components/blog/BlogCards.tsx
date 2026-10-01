import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDBCol, MDBContainer } from "mdbreact"
import Markdown from "markdown-to-jsx"
import { Accordion, Panel } from "baseui/accordion"
import { HeadingLarge, HeadingSmall, ParagraphMedium } from "baseui/typography"
import Moment from "react-moment"
import type { BlogCardsQuery } from "../../types/cms"

const BlogCards = () => {
  const data = useStaticQuery<BlogCardsQuery>(graphql`
    query BlogCards {
      gcms {
        blogs {
          id
          title
          description
          createdAt
          blogCategory
          content {
            markdown
          }
          preview {
            url
          }
        }
      }
    }
  `)

  const blogs = data.gcms.blogs.map(blog => (
    <Panel key={blog.id} title={blog.title}>
      <MDBContainer>
        <div className="blog-header">
          <HeadingLarge as="h2" marginTop="0" marginBottom="scale500">{blog.title}</HeadingLarge>
          <div className="d-flex justify-content-between pb-4">
            <HeadingSmall as="h3" marginTop="0" marginBottom="0">
              {blog.blogCategory}
            </HeadingSmall>
            <HeadingSmall as="p" color="contentSecondary" marginTop="0" marginBottom="0">
              <Moment format="MMM DD, YYYY">{blog.createdAt}</Moment>
            </HeadingSmall>
          </div>
        </div>
        <Markdown options={{ overrides: { p: { component: ParagraphMedium } } }}>
          {blog.content.markdown}
        </Markdown>
      </MDBContainer>
    </Panel>
  ))

  return (
    <>
      <MDBCol size="8">
        <Accordion renderAll>{blogs}</Accordion>
      </MDBCol>
    </>
  )
}

export default BlogCards
