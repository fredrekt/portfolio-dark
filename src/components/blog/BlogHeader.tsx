import React from 'react'
import { HeadingXXLarge, ParagraphLarge } from 'baseui/typography';
import { pageTitleFont } from '../../theme/site';
import { MDBCol, MDBIcon } from 'mdbreact';
import Moment from 'react-moment';
import { FacebookProvider, Share } from 'react-facebook';
import ShareLink from 'react-linkedin-share-link'
import type { Theme } from '../../types/theme'
import { THEME } from '../../types/theme'
import { SITE_URL } from '../../constants/site'

interface BlogHeaderProps {
  id: string
  title: string
  desc: string
  date: string
  theme: Theme
}

const BlogHeader = ({ id, title, desc, date, theme }: BlogHeaderProps) => {
    const postUrl = `${SITE_URL}/blog/${id}/`

    return (
        <>
            <MDBCol lg="4" md="4">
                <HeadingXXLarge font={pageTitleFont} marginTop="0" marginBottom="scale600">{title}</HeadingXXLarge>
                <ParagraphLarge marginTop="0" marginBottom="scale600">{desc}</ParagraphLarge>
                <div className="d-flex w-50 my-4 justify-content-between">
                    <FacebookProvider appId={process.env.GATSBY_FB_ID}>
                        <Share href={postUrl}>
                        {({ handleClick, loading }) => (
                        <a aria-disabled={loading} onClick={handleClick} className={theme === THEME.light ? "black-text" : "white-text"} type="button">
                            <MDBIcon size="lg" fab icon="facebook" />
                        </a>
                        )}
                        </Share>
                    </FacebookProvider>
                    <a className={theme === THEME.light ? "black-text" : "white-text"} rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${encodeURI(`Read more about: ${title}, via my blog.`)}%20${encodeURIComponent(postUrl)}`} target="_blank">
                        <MDBIcon size="lg" fab icon="twitter" />
                    </a>
                    <ShareLink link={postUrl}>
                       {link => (
                        <a className={theme === THEME.light ? "black-text" : "white-text"} rel="noopener noreferrer" target="_blank" href={link}>
                            <MDBIcon size="lg" fab icon="linkedin-in" />
                        </a>
                       )}
                    </ShareLink>
                </div>
                <div className="created-content text-uppercase small grey-text my-5">
                    Published at &nbsp;
                    <Moment format="MMM DD, YYYY">
                        {date}
                    </Moment>
                </div>
                {/* <div className="tag my-4">
                    <Tag closeable={false} variant={VARIANT.outlined}>
                        {category}
                    </Tag>
                </div> */}
            </MDBCol>
        </>
    )
}

export default BlogHeader
