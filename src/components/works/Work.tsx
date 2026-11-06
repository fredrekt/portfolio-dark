import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArrowRight from "baseui/icon/arrow-right"
import { HeadingLarge, ParagraphMedium } from "baseui/typography"
import ProgressiveImage from "react-progressive-image"
import type { WorksQuery } from "../../types/cms"

const Work = () => {
  const data = useStaticQuery<WorksQuery>(graphql`
    query Works {
      gcms {
        works(orderBy: createdAt_DESC) {
          id
          project
          link
          description
          previewImage {
            previewImageWork {
              previewImage {
                url(
                  transformation: { image: { resize: { height: 5, width: 5 } } }
                )
              }
            }
            url
          }
        }
      }
    }
  `)
  const arrow = <ArrowRight size={24} />

  return (
    <>
      {data.gcms.works.map(work => {
        const placeholder = work.previewImage?.previewImageWork?.[0]?.previewImage?.url
        const src = work.previewImage?.url
        const title = work.project ?? "Project"

        return (
          <article key={work.id} className="group relative min-h-[22rem] overflow-hidden bg-black">
            {src ? (
              <ProgressiveImage src={src} placeholder={placeholder ?? src}>
                {(image, loading) => (
                  <img
                    src={image}
                    alt={title}
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      loading ? "blur-sm" : ""
                    }`}
                  />
                )}
              </ProgressiveImage>
            ) : null}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 md:p-8">
              <HeadingLarge as="h2" color="#fff" marginTop="0" marginBottom="scale400">
                {title}
              </HeadingLarge>
              {work.description ? (
                <ParagraphMedium color="#fff" marginTop="0" marginBottom="scale500">
                  {work.description}
                </ParagraphMedium>
              ) : null}
              {work.link ? (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/live inline-flex w-fit items-center gap-1.5 self-start text-sm font-medium text-white"
                >
                  <span className="border-b border-white/80 pb-px transition-colors duration-300 group-hover/live:border-white">
                    See live
                  </span>
                  {arrow}
                </a>
              ) : (
                <span className="text-sm uppercase tracking-widest text-white/70">Archive</span>
              )}
            </div>
          </article>
        )
      })}
    </>
  )
}

export default Work
