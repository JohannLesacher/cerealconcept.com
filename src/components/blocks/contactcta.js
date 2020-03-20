import React from 'react'
import BlockContent from '../blockContent'

const ContactCta = ({ node }) => (
  <section className="section section-contact">
    <div className="has-text-centered">
      <h4 className="title"><BlockContent blocks={node.title} /></h4>
      <h2 className="subtitle"><BlockContent blocks={node.subtitle} /></h2>

      <button data-target="#contact-modal" className="button is-primary is-rounded is-medium modal-button">
        {node.bouton.texte}
      </button>
    </div>
  </section>
)

export default ContactCta
