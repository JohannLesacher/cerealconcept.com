import React from 'react'

import Logo from '../components/logo'
import Johann from '../components/images/johann'
import Adrien from '../components/images/adrien'

const About = () => (
  <section className="section section-about">
    <div className="container">
      <div className="columns  is-multiline">
        <div className="column is-3-desktop is-12">
          <Logo />
        </div>
        <div className="column is-9-desktop is-12">
          <div className="content">
            <h2 className="title is-2">A propos</h2>
            <p>Cereal Concept c'est d’abord l'association de deux entrepreneurs implantés à Toulouse. Depuis 2010 nous fournissons des services de qualité pour les professionnels TPE/PME comme pour les particuliers et indépendants.</p>

            <p>Avec plus de 8 ans d’expérience à manier les multiples technologies qui rendent le web un espace d’innovation constant, nous avons tissé des affinités avec de nombreux langages et outils tels que WordPress, React, WooCommerce, ou encore GatsbyJS.</p>

            <p>Nous travaillons en collaboration étroite avec un réseau d’indépendants fiables et réactifs. Ces partenaires privilégiés, au savoir-faire complémentaire, nous permettent de réaliser tout types de projets d’envergure.</p>

            <p>Notre ambition est de vous accompagner de la structuration à la réalisation de votre idée, mobiliser toutes notre compétences pour vous assister dans la réussite de votre entreprise. Rencontrons nous !</p>
          </div>
          <hr/>
          <div className="team">
            <div className="columns is-multiline">
              <div className="column is-6-desktop is-6">
                <div className="columns is-mobile">
                  <div className="column is-4">
                    <Johann className="is-rounded"/>
                  </div>
                  <div className="column is-8">
                    <h3 className="title is-3">Johann Lesacher</h3>
                    <h4 className="subtitle is-5">Développeur Web Full Stack</h4>
                    <a href="mailto:j.lesacher@cerealconcept.com">j.lesacher@cerealconcept.com</a><br/>
                    <a href="tel:+33671541553">+33 671 541 553</a>
                  </div>
                </div>
              </div>
              <div className="column is-6-desktop is-6">
                <div className="columns is-mobile">
                  <div className="column is-4">
                    <Adrien className="is-rounded"/>
                  </div>
                  <div className="column is-8">
                    <h3 className="title is-3">Adrien Pierrin</h3>
                    <h4 className="subtitle is-5">Expert SEO & E-Commerce</h4>
                    <a href="mailto:a.pierrin@cerealconcept.com">a.pierrin@cerealconcept.com</a><br/>
                    <a href="tel:+33658477849">+33 658 477 849</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
