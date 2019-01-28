import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = () => (
  <footer className="section section-footer has-background-primary has-text-white">
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
)

Footer.propTypes = {
  // siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  // siteTitle: ``,
}

export default Footer
