import React from 'react'
import {styled} from 'baseui';
import { MDBCol, MDBIcon } from 'mdbreact';
import Moment from 'react-moment';
import { FacebookProvider, Share } from 'react-facebook';
import ShareLink from 'react-linkedin-share-link'

const Header = styled('h1', {
    fontSize: `4.6rem`,
    fontFamily: `'Lato', sans-serif`,
    letterSpacing: `-.01em`,
    "@media screen and (max-width: 540px)": {
        fontSize: `3rem`
    }
})

const THEME = {
    light: 'light',
    dark: 'dark',
};

const BlogHeader = ({id, title, desc, date, theme}) => {
    return (
        <>
            <MDBCol lg="4" md="4">
                <Header className="mb-4">{title}</Header>
                <p className="h2-responsive my-4">{desc}</p>
                <div className="d-flex w-50 my-4 justify-content-between">
                    <FacebookProvider appId={process.env.GATSBY_FB_ID}>
                        <Share href={`https://www.fredgaringo.ga/${id}`}>
                        {({ handleClick, loading }) => (
                        <a disabled={loading} onClick={handleClick} className={theme === THEME.light ? "black-text" : "white-text"} type="button">
                            <MDBIcon size="lg" fab icon="facebook" />
                        </a>
                        )}
                        </Share>
                    </FacebookProvider>
                    <a className={theme === THEME.light ? "black-text" : "white-text"} rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${encodeURI(`Read more about: ${title}, via my blog.`)}%20https%3A%2F%2Ffredgaringo.ga%2Fblog%2F${id}
`} target="_blank">
                        <MDBIcon size="lg" fab icon="twitter" />
                    </a>
                    <ShareLink link={`https://fredgaringo.ga/blog/${id}`}>
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
