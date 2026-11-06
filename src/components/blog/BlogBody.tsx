import Markdown from "markdown-to-jsx"
import React from "react"
import { HeadingLarge, HeadingMedium, HeadingXLarge, ParagraphMedium } from "baseui/typography"

interface BlogBodyProps {
  content: string
}

const BlogBody = ({ content }: BlogBodyProps) => (
  <div className="md:col-span-8">
    <Markdown
      options={{
        overrides: {
          h1: { component: HeadingXLarge, props: { as: "h2" } },
          h2: { component: HeadingLarge },
          h3: { component: HeadingMedium },
          p: { component: ParagraphMedium },
          img: { props: { className: "h-auto max-w-full" } },
        },
      }}
    >
      {content}
    </Markdown>
  </div>
)

export default BlogBody
