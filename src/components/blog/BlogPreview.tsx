import { StyledLink } from "baseui/link"
import { HeadingLarge, ParagraphMedium } from "baseui/typography"
import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import ProgressiveImage from "react-progressive-image"
import type { BlogsPreviewQuery } from "../../types/cms"
import type { Theme } from "../../types/theme"

const THEME = {
  light: "light",
  dark: "dark",
}

interface BlogPreviewProps {
  theme: Theme
}

const BlogPreview = ({ theme }: BlogPreviewProps) => {
  const data = useStaticQuery<BlogsPreviewQuery>(graphql`
    query BlogPreviews {
      gcms {
        blogs(where: { blogCategory_not: movies }, orderBy: createdAt_DESC) {
          id
          title
          description
          blogCategory
          preview {
            url
            previewBlog {
              preview {
                url(
                  transformation: { image: { resize: { height: 5, width: 5 } } }
                )
              }
            }
          }
        }
      }
    }
  `)

  const { blogs } = data.gcms

  return (
    <>
      {blogs.map(blog => (
        <article key={blog.id} className="my-4">
          <Link to={`/blog/${blog.id}`}>
            {blog.preview.previewBlog.map(i => (
              <ProgressiveImage
                key={i.preview.url}
                src={blog.preview.url}
                placeholder={i.preview.url}
              >
                {(src, loading) => (
                  <img
                    src={src}
                    style={{ filter: loading ? `blur(5px)` : undefined }}
                    alt={blog.title}
                    className="w-full"
                  />
                )}
              </ProgressiveImage>
            ))}
            <div
              className={`my-4 ${
                theme === THEME.light ? "text-black" : "text-white"
              }`}
            >
              <HeadingLarge as="h2" marginTop="scale600" marginBottom="scale300">
                {blog.title}
              </HeadingLarge>
              <ParagraphMedium marginTop="0">{blog.description}</ParagraphMedium>
              <StyledLink animateUnderline href={`/blog/${blog.id}`}>
                Read Blog
              </StyledLink>
            </div>
          </Link>
        </article>
      ))}
    </>
  )
}

export default BlogPreview
