import React from 'react'

const ContactCta = ({ data }) => (
  <section className="section section-contact">
    <div className="has-text-centered">
      <h4 className="title">{data.contactTitre}</h4>
      <h2 className="subtitle">{data.contactSousTitre}</h2>

      <button data-target="#contact-modal" className="button is-primary is-rounded is-medium modal-button">
        {data.contactBouton.contactBoutonTexte}
      </button>
    </div>
  </section>
)

export default ContactCta
