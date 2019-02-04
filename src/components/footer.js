import React from 'react'
import Contact from './contact'

const Footer = () => (
  <>
    <Contact />
    <footer className="section section-footer has-background-dark has-text-white site-footer">
      <div className="container">
        <div className="column"><h4>Nous contacter</h4>
          <div className="contact"><p>Johann Lesacher, web alchimiste<br/><a href="mailto:j.lesacher@cerealconcept.com">j.lesacher@cerealconcept.com</a> - +33 6 71 541 553</p></div>
          <div className="contact"><p>Adrien Pierrin, webdesign et e-marketing<br/><a href="mailto:a.pierrin@cerealconcept.com">a.pierrin@cerealconcept.com</a> - +33 6 58 477 849</p></div>
        </div>
        <div className="column"><ul><li>Mentions légales</li><li>Politique de confidentialité</li></ul></div>
      </div>
    </footer>
  </>
)

export default Footer