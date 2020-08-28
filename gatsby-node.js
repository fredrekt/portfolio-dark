const path = require('path');

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    console.log("Page", page.path);
    if(page.path.match(/^\/blog/)){
        createPage({
            path: "/blog",
            matchPath: "/blog/*",
            component: path.resolve(`src/pages/routes.js`)
        })
    }
}