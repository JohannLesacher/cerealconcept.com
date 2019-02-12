import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Landing from '../components/landing'
import Skills from '../components/skills'
import ContactCta from '../components/contactcta'
import About from '../components/about'
import SEO from '../components/seo'

let ScrollReveal = undefined
if (typeof window !== `undefined`) {
  ScrollReveal = require("scrollreveal").default
}

export default class IndexPage extends React.Component {
  componentDidMount() {
    if (ScrollReveal !== undefined) {
      ScrollReveal().reveal('.to-reveal', {
        delay: 0,
        distance: '50px',
        origin: 'left',
        duration: 500,
        interval: 10,
        cleanup: true,
      })

      ScrollReveal().reveal('.reveal-spotlight', {
        distance: '0px',
        opacity: 0.1,
        viewFactor: 0.8,
        duration: 250,
        cleanup: true,
        mobile: false,
      });
    }
  }

  render() {
    const { landing, services, contact, aPropos } = this.props.data.markdown.contenu
    return (
      <Layout>
        <SEO
          title="Création de Site Web à Toulouse"
          description="Artisans du web spécialistes WordPress nous développons des sites web sur-mesure pour des clients dans le monde entier."
          keywords={[`wordpress`, `e-commerce`, `référencement`, `toulouse`]}
        />
        <Landing data={landing} />
        <Skills data={services} />
        <ContactCta data={contact} />
        <About data={aPropos} />
      </Layout>
    )
  }
}

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    markdown: markdownRemark(fileAbsolutePath: {regex: "/accueil/"}) {
      contenu: frontmatter {
        titre
        landing {
          image: landingImage {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
              }
            }
            relativePath
            extension
          }
          titre: landingTitre
          bouton: landingBouton {
            texte: landingBoutonTexte
          }
        }
        services {
          serviceSurTitre
          serviceTitre
          serviceBlock {
            serviceBlockImage {
              childImageSharp {
                fluid(maxWidth: 450, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationWidth
                }
              }
              relativePath
              extension
            }
            serviceBlockTitre
            serviceBlockTexte
            serviceBlockTags
          }
        }
        contact {
          contactTitre
          contactSousTitre
          contactBouton {
            contactBoutonTexte
          }
        }
        aPropos {
          aProposImage {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                presentationWidth
              }
            }
            relativePath
            extension
          }
          aProposContenu
          aProposTitre
          aProposEquipe {
            aProposEquipePhoto {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationWidth
                }
              }
              relativePath
              extension
            }
            aProposEquipeEmail
            aProposEquipeNom
            aProposEquipePoste
            aProposEquipeTelephone
          }
        }
      }
    }
  }
`
