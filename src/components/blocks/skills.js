import React from 'react'
import BlockContent from '../blockContent'

import Skill from '../skill'
import ImageHandler from '../imageHandler'

const Skills = ({ node }) => (
  <section className="section section-skills">
    <div className="container">
      <header className="has-text-centered">
        <h4 className="pretitle has-text-primary is-3"><BlockContent blocks={node.pretitle} /></h4>
        <h2 className="title is-2 section-title"><BlockContent blocks={node.title} /></h2>
      </header>
      <div className="skills">
        { node.skill.map((block, index) => (
          <Skill
            key={index}
            title={block.title}
            description={block.description}
            keywords={block.tags}
            image={<ImageHandler image={block.image} />}
          />
        )) }
      </div>
    </div>
  </section>
)

export default Skills
