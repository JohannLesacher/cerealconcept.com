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
          <div className="column">Adresse</div>
          <div className="column"></div>
          <div className="column">Reseaux</div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
