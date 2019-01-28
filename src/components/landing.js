import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Image from '../svg/landing_main.svg'

const Landing = () => (
  <section className="section section-landing">
    <div className="container">
      <div className="columns is-vcentered is-variable is-8">
        <div className="column is-6">
          <h1 className="title is-spaced is-1">Artisans du web <strong>spécialistes WordPress</strong> nous développons des sites web sur-mesure pour des clients dans le monde entier.</h1>
          <div className="buttons is-centered">
            <Link to='/' className="button is-rounded is-medium is-primary">Contactez-nous</Link>
          </div>
        </div>
        <div className="column is-6">
          <Image />
        </div>
      </div>
    </div>
  </section>
)

export default Landing
