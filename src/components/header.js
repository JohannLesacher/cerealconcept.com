import { Link } from 'gatsby'
import React from 'react'

import Logo from '../svg/cerealconcept_horiz.svg'

const Header = () => (
  <header className="header section">
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <Logo />
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item">
              <Link to="/#contact" className="button is-primary is-rounded">Contact</Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

export default Header
