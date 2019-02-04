import React from 'react'
import Contact from './contact'

const Footer = () => (
  <>
    <Contact />
    <footer className="section section-footer has-background-dark has-text-white site-footer">
      <div className="container">
        <div className="columnt">
          <h4 className="title is-2">Nous contacter</h4>
          <div className="contact"><p>Vous pouvez nous écrire à <a href="mailto:contact@cerealconcept.com">contact@cerealconcept.com</a> ou nous appeler au +33 6 71 541 553 / +33 6 58 477 849.<br/>Suivez notre actualité sur nos <a href="https://www.facebook.com/cerealconcept/" target="_blank">réseaux sociaux</a>.</p></div>
        </div>
        <div className="column"><ul><li>Mentions légales</li><li>Politique de confidentialité</li></ul></div>
      </div>
    </footer>
  </>
)

export default Footer