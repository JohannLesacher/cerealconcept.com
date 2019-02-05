import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const MentionsLegales = () => (
  <Layout>
    <SEO title="Mentions Légales" />
    <section className="section section-poldeconf">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="content">
              <h1 className="title is-1">Mentions Légales</h1>
              <h3 className="subtitle is-spaced is-6">Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : cerealconcept.com les informations suivantes :</h3>

              <h3 className="title is-3">Editeur :</h3>
              <p>Le site cerealconcept.com est édité par Johann Lesacher et Adrien Pierrin<br/>
              Présidents & Directeurs de la publication: Johann Lesacher et Adrien Pierrin<br/>
              Webmaster : Johann Lesacher et Adrien Pierrin</p>

              <h4 className="title is-4">Siège social</h4>
              <p><strong>Johann Lesacher</strong><br/>
              46 boulevard des Minimes, 31200, Toulouse, France<br/>
              SIRET: 75350308500049</p>
              <p><strong>Adrien Pierrin</strong><br/>
              46 boulevard des Minimes, 31200, Toulouse, France<br/>
              SIRET: 75350308500049</p>

              <h3 className="title is-3">Hébergement :</h3>
              <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>
              <p>610 22nd Street<br/>
              Suite 315<br/>
              San Francisco, CA 94107<br/>
              Etats-Unis d'Amérique</p>
              <h3 className="title is-3">Créateur du site :</h3>
              <p><Link to="/">Cereal Concept</Link> - Johann Lesacher et Adrien Pierrin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default MentionsLegales
