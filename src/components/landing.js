import React from 'react'

import ImageHandler from './imageHandler'
import remark from 'remark'
import remarkHTML from 'remark-html'

const Landing = ({ data }) => {
  data.titre = remark()
        .use(remarkHTML)
        .processSync(data.titre)
        .toString();
  return (
    <section className="section section-landing">
      <div className="container">
        <div className="columns is-mobile is-multiline is-vcentered">
          <div className="column is-12-tablet is-6-desktop is-7-widescreen">
            <h1 className="title is-spaced is-1" dangerouslySetInnerHTML={{ __html: data.titre }}></h1>
            <div className="buttons">
              <button data-target="#contact-modal" className="button is-rounded is-medium is-primary to-reveal modal-button">{ data.bouton.texte }</button>
            </div>
          </div>
          <div className="column is-10-mobile is-offset-1-mobile is-8-tablet is-offset-2-tablet is-6-desktop is-offset-0-desktop is-5-widescreen">
            <ImageHandler image={data.image} alt='Test alt' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
