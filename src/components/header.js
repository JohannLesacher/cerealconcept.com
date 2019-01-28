import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <header className="header section">
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Cereal Concept
          </Link>
          <strong className="navbar-item is-tagline">Artisans du Web</strong>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item">
              <Link to="/#contact" className="button">Contact</Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  // siteTitle: PropTypes.string,
}

Header.defaultProps = {
  // siteTitle: ``,
}

export default Header
