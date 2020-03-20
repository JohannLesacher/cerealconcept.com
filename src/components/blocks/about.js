import React from 'react'
import BlockContent from '../blockContent'
import ImageHandler from '../imageHandler'

const About = ({ node }) => {
  return (
    <section className="section section-about">
      <div className="container">
        <div className="columns  is-multiline">
          <div className="column is-3-desktop is-12">
            <ImageHandler image={node.image} />
          </div>
          <div className="column is-9-desktop is-12">
            <div className="content">
              <h2 className="title is-2"><BlockContent blocks={node.title} /></h2>
              <BlockContent blocks={node.texte} />
            </div>
            <hr/>
            <div className="team">
              <div className="columns is-multiline">
                { node.team.map((membre, index) => (
                  <div className="column is-6-desktop is-6" key={ index }>
                    <div className="columns is-mobile">
                      <div className="column is-4">
                        <ImageHandler image={membre.image} className="is-rounded"/>
                      </div>
                      <div className="column is-8">
                        <h3 className="title is-3">{ membre.nom }</h3>
                        <h4 className="subtitle is-5">{ membre.poste }</h4>
                        <a href={ "mailto:"+membre.email }>{ membre.email }</a><br/>
                        <a href="tel:+33671541553">{ membre.telephone }</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
