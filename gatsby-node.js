require("dotenv").config()

const fs = require("fs")
const path = require("path")
const { SITE_URL } = require("./src/constants/site")

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

exports.onPostBuild = () => {
  const destination = path.join(__dirname, "public", "robots.txt")
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap-index.xml\n`

  fs.mkdirSync(path.dirname(destination), { recursive: true })
  fs.writeFileSync(destination, body)
}
