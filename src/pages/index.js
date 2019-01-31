import React from 'react'

import Layout from '../components/layout'
import Landing from '../components/landing'
import Skills from '../components/skills'
import About from '../components/about'
import Contact from '../components/contact'
import SEO from '../components/seo'

import ScrollReveal from 'scrollreveal'

class IndexPage extends React.Component {
  componentDidMount() {
    console.log('IndexPage componentDidMount')
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
        <About />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
