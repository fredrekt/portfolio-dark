// Gatsby only inlines `process.env.GATSBY_*` when it is referenced statically,
// so each variable has to be read by its full name (no destructuring).
export const EMAILJS_SERVICE_ID = process.env.GATSBY_EMAILJS_SERVICE_ID ?? ""
export const EMAILJS_TEMPLATE_ID = process.env.GATSBY_EMAILJS_TEMPLATE_ID ?? ""
export const EMAILJS_PUBLIC_KEY = process.env.GATSBY_EMAILJS_PUBLIC_KEY ?? ""
export const RECAPTCHA_SITE_KEY = process.env.GATSBY_RECAPTCHA_SITEKEY ?? ""

export const isContactFormConfigured = Boolean(
  EMAILJS_SERVICE_ID &&
    EMAILJS_TEMPLATE_ID &&
    EMAILJS_PUBLIC_KEY &&
    RECAPTCHA_SITE_KEY
)
