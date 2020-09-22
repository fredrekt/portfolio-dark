import React from 'react'
import {styled} from 'baseui';
import { MDBCol, MDBIcon } from 'mdbreact';
import Moment from 'react-moment';

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

const BlogHeader = ({title, desc, date, theme}) => {
    return (
        <>
            <MDBCol lg="4" md="4">
                <Header className="mb-4">{title}</Header>
                <p className="h2-responsive my-4">{desc}</p>
                <div className="d-flex w-50 my-4 justify-content-between">
                    <a className={theme === THEME.light ? "black-text" : "white-text"} href="#">
                        <MDBIcon size="lg" fab icon="facebook" />
                    </a>
                    <a className={theme === THEME.light ? "black-text" : "white-text"} href="#">
                        <MDBIcon size="lg" fab icon="twitter" />
                    </a>
                    <a className={theme === THEME.light ? "black-text" : "white-text"} href="#">
                        <MDBIcon size="lg" fab icon="linkedin-in" />
                    </a>
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
