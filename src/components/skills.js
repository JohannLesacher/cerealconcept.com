import React from 'react'

import Skill from './skill'
import ImageHandler from './imageHandler'

const Skills = ({ data }) => (
  <section className="section section-skills">
    <div className="container">
      <header className="has-text-centered">
        <h4 className="pretitle has-text-primary is-3">{ data.serviceSurTitre }</h4>
        <h2 className="title is-2 section-title">{ data.serviceTitre }</h2>
      </header>
      <div className="skills">
        { data.serviceBlock.map((block, index) => (
          <Skill
            key={index}
            title={block.serviceBlockTitre}
            description={block.serviceBlockTexte}
            keywords={block.serviceBlockTags}
            image={<ImageHandler image={block.serviceBlockImage} />}
          />
        )) }
      </div>
    </div>
  </section>
)

export default Skills
