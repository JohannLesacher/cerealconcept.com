import { Link } from 'gatsby'
import React from 'react'

import Image from '../svg/landing_main2.svg'

const Landing = () => (
  <section className="section section-landing">
    <div className="container">
      <div className="columns is-vcentered is-variable is-8">
        <div className="column is-7">
          <h1 className="title is-spaced is-1">Artisans du web <strong>spécialistes WordPress</strong> nous développons des <strong>sites web sur-mesure</strong> pour des clients dans le monde entier.</h1>
          <div className="buttons">
            <Link to='/' className="button is-rounded is-medium is-primary">Discutons de vos projets</Link>
          </div>
        </div>
        <div className="column is-5">
          <Image />
        </div>
      </div>
    </div>
  </section>
)

export default Landing
