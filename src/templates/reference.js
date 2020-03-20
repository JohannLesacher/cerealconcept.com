import React from "react"
import { graphql } from "gatsby"
import ImageHandler from '../components/imageHandler'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import BlockContent from '../components/blockContent'
import SEO from '../components/seo'

let ScrollReveal = undefined
if (typeof window !== `undefined`) {
  ScrollReveal = require("scrollreveal").default
}

export default class Reference extends React.Component {

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
    const props = this.props
    const data = props.data.sanityClient
    const { pageContext } = props
    const slug = pageContext ? pageContext.slug : ""
    let pageClassName
    if (slug) {
      slug === '/' ? 
        pageClassName = `is-page-home` :
        pageClassName = `is-page-${slug}`
    } else {
      pageClassName = `is-page-404`
    }

    console.log(data)

    return (
      <Layout className={pageClassName}>
        <SEO
          title={data.client}
          description="Artisans du web spécialistes WordPress nous développons des sites web sur-mesure pour des clients dans le monde entier."
          image={data.featuredImage ? data.featuredImage.asset ? data.featuredImage.asset.fluid.src : null : null}
          url={slug !== '/' ? props.data.site.siteMetadata.siteUrl + `/` + slug : props.data.site.siteMetadata.siteUrl}
          keywords={[`wordpress`, `e-commerce`, `référencement`, `toulouse`]}
        />

        <PageHeader title={data.client} subtitle={data.tags.join(' ')} displayTitle={true} />

        <section className="section section-single-reference">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-3">
                <ImageHandler image={data.featuredImage} />
              </div>
              <div className="column is-7">
                <div className="content is-medium">
                  {data.prestation}
                </div>
                <div className="content">
                  <BlockContent blocks={data._rawPresentationLongue} />
                </div>
                <div className="has-text-centered">
                  <a href={data.lien} className="button is-primary is-rounded">Voir le site</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  fragment imageFluidProps on SanityImageFluid {
    src
    srcWebp
    srcSetWebp
    sizes
    srcSet
    aspectRatio
    base64
  }

  query($slug: String!) {
    sanityClient(slug: {current: {eq: $slug}}) {
      client
      prestation
      _rawPresentationLongue(resolveReferences: {maxDepth: 10})
      lien
      tags
      featuredImage {
        childImageSharp: asset {
          fluid {
            ...imageFluidProps
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
