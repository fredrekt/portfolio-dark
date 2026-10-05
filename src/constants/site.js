const SITE_URL = (
  process.env.GATSBY_SITE_URL || "https://fredgaringo.com"
).replace(/\/$/, "")

module.exports = { SITE_URL }
