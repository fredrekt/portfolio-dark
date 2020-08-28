import React from 'react'
import { Router } from '@reach/router';
import Homepage from './index';
import Blog from './blog'

const routes = () => {
    return (
        <div>
            <Router>
                <Homepage path="/"/>
                <Blog path="/blog/:id"/>
            </Router>
        </div>
    )
}

export default routes
