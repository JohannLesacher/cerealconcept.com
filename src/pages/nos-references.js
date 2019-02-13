import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default class NosReferencesPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title={this.props.data.markdown.titre}
          description="Artisans du web spécialistes WordPress nous développons des sites web sur-mesure pour des clients dans le monde entier."
          keywords={[`wordpress`, `e-commerce`, `référencement`, `toulouse`]}
        />
        <section className="section section-nos-references">
          <div className="container">
            <header>
              <h1 className="title is-1">{this.props.data.titre}</h1>
            </header>
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
      }
    }
  }
`
