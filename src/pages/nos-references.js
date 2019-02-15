import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageHandler from '../components/imageHandler'

export default class NosReferencesPage extends React.Component {
  render() {
    const { titre, image } = this.props.data.markdown.contenu
    return (
      <Layout>
        <SEO
          title={this.props.data.markdown.titre}
          description="Artisans du web spécialistes WordPress nous développons des sites web sur-mesure pour des clients dans le monde entier."
          keywords={[`wordpress`, `e-commerce`, `référencement`, `toulouse`]}
        />
        <section className="section section-nos-references">
          <div className="container">
            <header className="has-text-centered">
              <h1 className="title is-1">{titre}</h1>
            </header>
            <div className="columns">
              <div className="column">
                <ImageHandler url={image}/>
              </div>
            </div>
          </div>./johann.jpg
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
        image
      }
    }
  }
`
