import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageHandler from '../components/imageHandler'

const wrapperStyle = {
  position: "absolute",
}

export default class NosReferencesPage extends React.Component {
  render() {
    const { titre, realisations } = this.props.data.markdown.contenu
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
              <h3 className="subtitle is-4">Découvrez nos références</h3>
            </header>
          </div>
        </section>
        <section className="section section-nos-references">
          <div className="container">
            <div className="columns is-multiline">
              {realisations.filter((realisation) => realisation.realisationsAfficher).map((realisation, index) => (
                <div className="column is-3" key={index} >
                  <div className="realisation-box">
                    <ImageHandler image={realisation.realisationsImage} className="screenshot" style={wrapperStyle} />
                    <div className="overlay">
                      <h3 className="title is-4">{realisation.realisationsNom}</h3>
                      <h5 className="subtitle is-6">{realisation.realisationsDescription}</h5>
                      <a href={realisation.realisationsLien} className="link">Visiter le site</a>
                    </div>
                  </div>
                </div>
              ))}
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
          realisationsAfficher
          realisationsDescription
          realisationsLien
          realisationsImage {
            childImageSharp {
              fluid(maxWidth: 500, quality: 92, cropFocus: NORTH) {
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
