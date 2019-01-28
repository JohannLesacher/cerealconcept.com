import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../components/logo'

const About = () => (
  <section className="section section-about">
    <div className="container">
      <div className="columns is-vcentered is-variable is-8">
        <div className="column is-4">
          <Logo />
        </div>
        <div className="column is-8">
          <div className="content">
            <h2 className="title is-2">A propos</h2>
            <p>Cereal Concept c'est d’abord l'association de deux entrepreneurs implantés à Toulouse. Depuis 2010 nous fournissons des services de qualité pour les professionnels TPE/PME comme pour les particuliers et indépendants.</p>

            <p>Avec plus de 8 ans d’expérience à manier les multiples technologies qui rendent le web un espace d’innovation constant, nous avons tissé des affinités avec de nombreux langages et outils tels que WordPress, React, WooCommerce, ou encore GatsbyJS.</p>

            <p>Nous travaillons en collaboration étroite avec un réseau d’indépendants fiables et réactifs. Ces partenaires privilégiés, au savoir-faire complémentaire, nous permettent de réaliser tout types de projets d’envergure.</p>

            <p>Notre ambition est de vous accompagner de la structuration à la réalisation de votre idée, mobiliser toutes notre compétences pour vous assister dans la réussite de votre entreprise. Rencontrons nous !</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

About.propTypes = {
  // siteTitle: PropTypes.string,
}

About.defaultProps = {
  // siteTitle: ``,
}

export default About
