/**
 * SEO component for the Gatsby Head API.
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import type { SeoQuery } from "../types/cms"

interface SEOProps {
  description?: string
  title: string
  image?: string
  children?: ReactNode
}

function SEO({ description = ``, title, image = ``, children }: SEOProps) {
  const { site } = useStaticQuery<SeoQuery>(
    graphql`
      query SeoData {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <html lang="en" />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      {image ? <meta property="og:image" content={image} /> : null}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {image ? <meta name="twitter:image" content={image} /> : null}
      {children}
    </>
  )
}

export default SEO
