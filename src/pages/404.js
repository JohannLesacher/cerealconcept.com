import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Image from '../svg/lost.svg'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Erreur 404 : Page Introuvable" />
    <section className="section section-404">
      <div className="columns is-centered">
        <div className="column is-narrow has-text-centered">
          <Image className="image-404" />
          <h1 className="title is-1">Erreur 404 / Introuvable</h1>
          <h3 className="subtitle is-3">La page que vous souhaitiez visiter n'existe plus 😞</h3>
          <Link to="/" className="button is-primary is-rounded">Retour à l'accueil</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
