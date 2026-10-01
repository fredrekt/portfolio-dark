/**
 * SEO component for the Gatsby Head API.
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import type { SeoQuery } from "../types/cms"

interface SEOProps {
  title: string
  description?: string
  image?: string
  pathname?: string
  noIndex?: boolean
  type?: "website" | "article"
  publishedAt?: string
  children?: ReactNode
}

function absoluteUrl(siteUrl: string, pathname = "/") {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`
  return `${siteUrl}${path}`
}

function SEO({
  title,
  description = ``,
  image = ``,
  pathname = `/`,
  noIndex = false,
  type = "website",
  publishedAt,
  children,
}: SEOProps) {
  const { site } = useStaticQuery<SeoQuery>(
    graphql`
      query SeoData {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            jobTitle
            locality
            region
            country
          }
        }
      }
    `
  )

  const {
    title: siteTitle,
    description: siteDescription,
    author,
    siteUrl,
    jobTitle,
    locality,
    region,
    country,
  } = site.siteMetadata

  const metaDescription = description || siteDescription
  const documentTitle = `${title} | ${siteTitle}`
  const canonical = absoluteUrl(siteUrl, pathname)
  const socialImage = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(siteUrl, image)
    : undefined
  const personId = `${siteUrl}/#person`
  const websiteId = `${siteUrl}/#website`

  const breadcrumbs = [{ name: "Home", url: `${siteUrl}/` }]
  if (pathname.startsWith("/blog/") && pathname !== "/blogs/") {
    breadcrumbs.push({ name: "Blog", url: `${siteUrl}/blogs/` })
    breadcrumbs.push({ name: title, url: canonical })
  } else if (pathname !== "/") {
    breadcrumbs.push({ name: title, url: canonical })
  }

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${siteUrl}/`,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: author,
      jobTitle,
      url: `${siteUrl}/`,
      address: {
        "@type": "PostalAddress",
        addressLocality: locality,
        addressRegion: region,
        addressCountry: country,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: documentTitle,
      description: metaDescription,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      inLanguage: "en",
    },
  ]

  if (breadcrumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    })
  }

  if (type === "article") {
    graph.push({
      "@type": "BlogPosting",
      headline: title,
      description: metaDescription,
      datePublished: publishedAt,
      image: socialImage,
      author: { "@id": personId },
      mainEntityOfPage: canonical,
      url: canonical,
    })
  }

  return (
    <>
      <html lang="en" />
      <title>{documentTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <meta name="author" content={author} />
      <meta property="og:locale" content="en_PH" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={canonical} />
      <meta
        property="og:type"
        content={type === "article" ? "article" : "website"}
      />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={metaDescription} />
      {socialImage ? <meta property="og:image" content={socialImage} /> : null}
      {type === "article" && publishedAt ? (
        <meta property="article:published_time" content={publishedAt} />
      ) : null}
      <meta
        name="twitter:card"
        content={socialImage ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {socialImage ? <meta name="twitter:image" content={socialImage} /> : null}
      <script type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}
      </script>
      {children}
    </>
  )
}

export default SEO
