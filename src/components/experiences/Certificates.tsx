import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Moment from "react-moment"
import { HeadingSmall } from "baseui/typography"
import type { CertificatesQuery } from "../../types/cms"
import type { Theme } from "../../types/theme"

interface CertificatesProps {
  theme: Theme
}

const Certificates = ({ theme }: CertificatesProps) => {
  const rule = theme === "light" ? "border-black" : "border-white"

  return (
    <StaticQuery<CertificatesQuery>
      query={graphql`
        query Certificates {
          gcms {
            certificates(orderBy: date_DESC) {
              id
              date
              company
              title
              description
            }
          }
        }
      `}
      render={data => (
        <div>
          {data.gcms.certificates.map(certificate => (
            <div key={certificate.id} className="my-8 first:mt-0">
              <div className={`resume-container border-l pl-4 ${rule}`}>
                <div className="resume-content">
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.14em]">
                    <Moment format="YYYY">{certificate.date}</Moment>
                  </p>
                  <HeadingSmall as="h3" marginTop="0" marginBottom="scale100">{certificate.company}</HeadingSmall>
                  <p className="mb-3 text-base">{certificate.title}</p>
                  <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed">
                    {certificate.description.map(desc => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    />
  )
}

export default Certificates
