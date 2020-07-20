import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const about = () => {
    return (
        <Layout>
            <SEO title="About"/>
            <div style={{ color: '#fff' }}>
                <h1>
                    About page
                </h1>
            </div>
        </Layout>
    )
}

export default about
