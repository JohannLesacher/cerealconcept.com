import React from 'react'
import Contact from './contact'
import { Link } from 'gatsby'

import Facebook from '../components/images/facebook'

const Footer = () => (
  <>
    <Contact />
    <footer className="section section-footer has-background-dark has-text-white site-footer">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h4 className="title has-text-white is-4">Cereal Concept</h4>
          </div>
          <div className="column has-text-white">
            <h4 className="title is-4 has-text-white">Nous contacter</h4>
            <div className="contact">
              <p>Vous pouvez nous écrire à <a href="mailto:contact@cerealconcept.com">contact@cerealconcept.com</a> ou nous appeler au +33 6 71 541 553 / +33 6 58 477 849.</p>
              <p>
                <a href="https://www.facebook.com/cerealconcept/" target="_blank">
                  <Facebook/>
                </a>
              </p>
            </div>
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
