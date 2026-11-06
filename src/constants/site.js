const SITE_URL = (
  process.env.GATSBY_SITE_URL || "https://www.fredgaringo.com"
).replace(/\/$/, "")

module.exports = { SITE_URL }
