import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"
import SEO from '../seo'

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={ frontmatter.titre } />
      <section className="section section-page-simple">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10">
              <div className="content">
                <h1 className="title is-1">{ frontmatter.titre }</h1>
                <h3 className="subtitle is-spaced is-6">{ frontmatter.sousTitre }</h3>

                <div
                  className="page-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        url
        client
        secteur_activite
        presentation
        image {
          childImageSharp {
            fluid(maxWidth: 500, quality: 92, cropFocus: NORTH) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
          relativePath
          extension
        }
        lien
        tags
      }
    }
  }
`
