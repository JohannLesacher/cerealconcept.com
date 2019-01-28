import React from 'react'

import Layout from '../components/layout'
import Landing from '../components/landing'
import Skills from '../components/skills'
import About from '../components/about'
import Contact from '../components/contact'
import SEO from '../components/seo'

const IndexPage = () => (
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

export default IndexPage
