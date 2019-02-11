import React from 'react'

import ImageHandler from './imageHandler'
import remark from 'remark'
import remarkHTML from 'remark-html'

const About = ({ data }) => {
  data.aProposContenu = remark()
        .use(remarkHTML)
        .processSync(data.aProposContenu)
        .toString();
  return (
    <section className="section section-about">
      <div className="container">
        <div className="columns  is-multiline">
          <div className="column is-3-desktop is-12">
            <ImageHandler image={data.aProposImage} />
          </div>
          <div className="column is-9-desktop is-12">
            <div className="content">
              <h2 className="title is-2">{ data.aProposTitre }</h2>
              <div dangerouslySetInnerHTML={{ __html: data.aProposContenu }} >
              </div>
            </div>
            <hr/>
            <div className="team">
              <div className="columns is-multiline">
                { data.aProposEquipe.map((membre, index) => (
                  <div className="column is-6-desktop is-6" key={ index }>
                    <div className="columns is-mobile">
                      <div className="column is-4">
                        <ImageHandler image={membre.aProposEquipePhoto} className="is-rounded"/>
                      </div>
                      <div className="column is-8">
                        <h3 className="title is-3">{ membre.aProposEquipeNom }</h3>
                        <h4 className="subtitle is-5">{ membre.aProposEquipePoste }</h4>
                        <a href={ "mailto:"+membre.aProposEquipeEmail }>{ membre.aProposEquipeEmail }</a><br/>
                        <a href="tel:+33671541553">{ membre.aProposEquipeTelephone }</a>
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
