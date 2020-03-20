import React from 'react'
import { Link } from 'gatsby'
import ImageHandler from '../imageHandler'

const wrapperStyle = {
  position: "absolute",
}

const ReferencesList = ({ node }) => {
  return (
    <section className="section section-nos-references">
      <div className="container">
        <div className="columns is-multiline">
          {node.references.map((realisation, index) => {
            const hasSinglePage = (realisation.prestation || realisation.presentation_longue)
            return (
              <div className="column is-3-desktop is-6-tablet" key={index} >
                <div className="realisation-box">
                  <ImageHandler image={realisation.featuredImage} className="screenshot" style={wrapperStyle} />
                  <div className="overlay">
                    <h3 className="title is-4">{realisation.client}</h3>
                    <h5 className="subtitle is-6">{realisation.tags.join(' ')}</h5>
                    { hasSinglePage ? (
                      <Link to={"/nos-references/" + realisation.slug.current} className="link">En savoir plus</Link>
                    ) : (
                      <a href={realisation.lien} className="link" target="_blank" rel="noopener noreferrer">Visiter le site</a>
                    )}
                  </div>
                </div>
              </div>
            )}
          )}
        </div>
      </div>
    </section>
  )
}
export default ReferencesList
