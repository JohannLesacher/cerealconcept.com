import React from 'react'

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

class IndexPage extends React.Component {
  componentDidMount() {
    if (ScrollReveal !== undefined) {
      ScrollReveal().reveal('.to-reveal', {
        delay: 0,
        distance: '50px',
        origin: 'left',
        duration: 500,
        interval: 10,
        cleanup: true
      })

      ScrollReveal().reveal('.reveal-spotlight', {
        distance: '0px',
        opacity: 0.1,
        viewFactor: 0.8,
        duration: 250,
        cleanup: true
      });
    }
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Création site web Toulouse"
          description="Artisans du web spécialistes WordPress nous développons des sites web sur-mesure pour des clients dans le monde entier."
          keywords={[`gatsby`, `application`, `react`]}
        />
        <Landing />
        <Skills />
        <ContactCta />
        <About />
      </Layout>
    )
  }
}

export default IndexPage
