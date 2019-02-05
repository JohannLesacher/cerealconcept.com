import React from 'react'
import Contact from './contact'
import { Link } from 'gatsby'

const Footer = () => (
  <>
    <Contact />
    <footer className="section section-footer has-background-dark has-text-white site-footer">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h4 className="title has-text-white is-4">Cereal Concept</h4>
          </div>
          <div className="column">
            <h3 className="title is-3">Johann Lesacher</h3>
            <h4 className="subtitle is-5">Développeur Web Full Stack</h4>
            <a href="mailto:j.lesacher@cerealconcept.com">j.lesacher@cerealconcept.com</a><br/>
            <a href="tel:+33671541553">+33 671 541 553</a>
          </div>
          <div className="column">
            <p>Adrien Pierrin, Web et Communication<br/>
            <a href="mailto:a.pierrin@cerealconcept.com">a.pierrin@cerealconcept.com</a><br/>
            <a href="tel:+33658477849">+33 658 477 849</a></p>
          </div>
          <div className="column">
            <ul>
              <li><Link to="/">Mentions légales</Link></li>
              <li><Link to="/politique-de-confidentialite">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
