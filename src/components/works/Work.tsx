import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDBCol, MDBView, MDBMask } from "mdbreact"
import ArrowRight from "baseui/icon/arrow-right"
import { StyledLink } from "baseui/link"
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
  const arrow = <ArrowRight size={32} />

  return (
    <>
      {data.gcms.works.map(work => (
        <MDBCol key={work.id} className="mb-5" md="6" lg="6">
          <MDBView zoom className="h-100">
            {work.previewImage.previewImageWork.map(previewImage => (
              <ProgressiveImage
                className="w-100 h-100"
                src={work.previewImage.url}
                placeholder={previewImage.previewImage.url}
              >
                {(src, loading) => (
                  <img
                    style={{ filter: loading ? `blur(5px)` : undefined }}
                    className="w-100 h-100"
                    src={src}
                    alt="work preview alternative"
                  />
                )}
              </ProgressiveImage>
            ))}
            <MDBMask className="flex-center" overlay="black-strong">
              <div className="content-container white-text p-5">
                <HeadingLarge as="h2" color="#fff" marginTop="0" marginBottom="scale600">
                  {work.project}
                </HeadingLarge>
                <ParagraphMedium color="#fff" marginTop="0" marginBottom="scale600">
                  {work.description}
                </ParagraphMedium>
                <StyledLink
                  animateUnderline
                  className="content-container-link white-text"
                  href={work.link}
                >
                  See live {arrow}
                </StyledLink>
              </div>
            </MDBMask>
          </MDBView>
        </MDBCol>
      ))}
    </>
  )
}

export default Work
