import React from 'react';
import SingleBlog from '../components/blog/SingleBlog';

const blog = (props) => {
    return (
        <>
            <SingleBlog id={props.id}/>
        </>
    )
}

export default blog
