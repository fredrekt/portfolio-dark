const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const {data: {gcms: {blogs}}} = await graphql(`
        {
            gcms{
                blogs(where: { blogCategory_not: movies }){
                    id
                    title
                }
            }
        }
    `)

    blogs.forEach(({id, title}) => createPage({
        path: `/blog/${id}`,
        component: require.resolve(`./src/templates/BlogPage.js`),
        context: {
            id
        }
    }))
}