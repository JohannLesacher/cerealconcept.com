import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageHandler from '../components/imageHandler'

export default class NosReferencesPage extends React.Component {
  render() {
    const { titre, imagetest } = this.props.data.markdown.contenu
    return (
      <Layout>
        <SEO
          title={this.props.data.markdown.contenu.titre}
          description="Artisans du web spécialistes WordPress nous développons des sites web sur-mesure pour des clients dans le monde entier."
          keywords={[`wordpress`, `e-commerce`, `référencement`, `toulouse`]}
        />
        <section className="section section-nos-references">
          <div className="container">
            <header className="has-text-centered">
              <h1 className="title is-1">{titre}</h1>
            </header>
            <div className="columns is-centered">
              <div className="column is-8">
                <div className="columns is-multiline">
                  <div className="column is-4">
                    <ImageHandler image={imagetest} />
                  </div>
                  <div className="column is-4">
                    <ImageHandler image={imagetest} />
                  </div>
                  <div className="column is-4">
                    <ImageHandler image={imagetest} />
                  </div>
                  <div className="column is-4">
                    <ImageHandler image={imagetest} />
                  </div>
                  <div className="column is-4">
                    <ImageHandler image={imagetest} />
                  </div>
                  <div className="column is-4">
                    <ImageHandler image={imagetest} />
                  </div>
                  <div className="column is-4">
                    <ImageHandler image={imagetest} />
                  </div>
                  <div className="column is-4">
                    <ImageHandler image={imagetest} />
                  </div>
                  <div className="column is-4">
                    <ImageHandler image={imagetest} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const NosReferencesPageQuery = graphql`
  query NosReferencesPageQuery {
    markdown: markdownRemark(fileAbsolutePath: {regex: "/nos-references/"}) {
      contenu: frontmatter {
        titre
        realisations {
          realisationsNom
          realisationsImage {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
              }
            }
            relativePath
            extension
          }
        }
      }
    }
  }
`
