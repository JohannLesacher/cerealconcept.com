import React from 'react'
import Contact from './contact'

const Footer = () => (
  <>
    <Contact />
    <footer className="section section-footer has-background-dark has-text-white site-footer">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h4 className="title has-text-white is-4">Cereal Concept</h4>
          </div>
          <div className="column"><p>Johann Lesacher, web alchimiste<br/>j.lesacher@cerealconcept.com<br/>+33 671 541 553</p></div>
          <div className="column"><p>Adrien Pierrin, web et communication<br/>a.pierrin@cerealconcept.com<br/>+33 658 477 849</p></div>
          <div className="column"><ul><li>Mentions légales</li><li>Politique de confidentialité</li></ul></div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer