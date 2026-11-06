import React from "react"
import { HeadingXXLarge, ParagraphLarge } from "baseui/typography"
import { pageTitleFont } from "../../theme/site"
import Moment from "react-moment"
import { FacebookProvider, Share } from "react-facebook"
import ShareLink from "react-linkedin-share-link"
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "../Icons"
import type { Theme } from "../../types/theme"
import { THEME } from "../../types/theme"
import { SITE_URL } from "../../constants/site"

interface BlogHeaderProps {
  id: string
  title: string
  desc: string
  date: string
  theme: Theme
}

const BlogHeader = ({ id, title, desc, date, theme }: BlogHeaderProps) => {
  const ink = theme === THEME.light ? "text-black" : "text-white"
  const postUrl = `${SITE_URL}/blog/${id}/`

  return (
    <div className="md:col-span-4">
      <HeadingXXLarge font={pageTitleFont} marginTop="0" marginBottom="scale600">
        {title}
      </HeadingXXLarge>
      <ParagraphLarge marginTop="0" marginBottom="scale600">
        {desc}
      </ParagraphLarge>
      <div className="my-6 flex w-1/2 justify-between">
        <FacebookProvider appId={process.env.GATSBY_FB_ID}>
          <Share href={postUrl}>
            {({ handleClick, loading }) => (
              <a
                aria-disabled={loading}
                onClick={handleClick}
                className={ink}
                type="button"
                href={postUrl}
              >
                <FacebookIcon />
                <span className="sr-only">Share on Facebook</span>
              </a>
            )}
          </Share>
        </FacebookProvider>
        <a
          className={ink}
          rel="noopener noreferrer"
          href={`https://twitter.com/intent/tweet?text=${encodeURI(
            `Read more about: ${title}, via my blog.`
          )}%20${encodeURIComponent(postUrl)}`}
          target="_blank"
        >
          <TwitterIcon />
          <span className="sr-only">Share on Twitter</span>
        </a>
        <ShareLink link={postUrl}>
          {link => (
            <a
              className={ink}
              rel="noopener noreferrer"
              target="_blank"
              href={link}
            >
              <LinkedInIcon />
              <span className="sr-only">Share on LinkedIn</span>
            </a>
          )}
        </ShareLink>
      </div>
      <div className="my-8 text-xs uppercase tracking-widest text-neutral-500">
        Published at{" "}
        <Moment format="MMM DD, YYYY">{date}</Moment>
      </div>
    </div>
  )
}

export default BlogHeader
