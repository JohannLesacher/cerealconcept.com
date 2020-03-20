import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import SEO from '../components/seo'

let ScrollReveal = undefined
if (typeof window !== `undefined`) {
  ScrollReveal = require("scrollreveal").default
}

export default class Page extends React.Component {

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
    const data = props.data.sanityPage
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

    return (
      <Layout className={pageClassName}>
        <SEO
          title={data.title}
          description="Artisans du web spécialistes WordPress nous développons des sites web sur-mesure pour des clients dans le monde entier."
          image={data.featuredImage ? data.featuredImage.asset ? data.featuredImage.asset.fluid.src : null : null}
          url={slug !== '/' ? props.data.site.siteMetadata.siteUrl + `/` + slug : props.data.site.siteMetadata.siteUrl}
          keywords={[`wordpress`, `e-commerce`, `référencement`, `toulouse`]}
        />

        <PageContent data={data} />
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
    sanityPage(slug: {current: {eq: $slug}}) {
      title
      displayTitle
      subtitle
      modePageSimple
      featuredImage {
        asset {
          fluid {
            ...imageFluidProps
          }
        }
      }
      _rawContenu(resolveReferences: {maxDepth: 10})
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
