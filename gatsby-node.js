const path = require("path")

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const result = await graphql(`
    query BlogPages {
      gcms {
        blogs(where: { blogCategory_not: movies }) {
          id
          title
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Failed to query GraphCMS blogs.`, result.errors)
    return
  }

  const blogs = result.data?.gcms?.blogs ?? []

  blogs.forEach(({ id }) =>
    createPage({
      path: `/blog/${id}`,
      component: path.resolve(`./src/templates/BlogPage.tsx`),
      context: {
        id,
      },
    })
  )
}
