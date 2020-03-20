import PropTypes from 'prop-types'
import React from 'react'
import BlockContent from './blockContent'

import './skill.scss'

const Skill = ({title, description, keywords, image}) => (
  <div className="columns skill is-vcentered reveal-spotlight">
    <div className="column is-5">
      {image}
    </div>
    <div className="column is-7">
      <div className="skill-content">
        <h2 className="title is-spaced is-2 to-reveal"><BlockContent blocks={title}/></h2>
        <h4 className="subtitle is-5"><BlockContent blocks={description}/> <small><button data-target="#contact-modal" className="is-link modal-button">Contactez-nous</button></small></h4>
        <div className="tags">
          {keywords ? keywords.map((keyword, i) => (
            <span className="tag to-reveal" key={i}>{keyword}</span>
          )) : ''}
        </div>
      </div>
    </div>
  </div>
)

Skill.propTypes = {
  title: PropTypes.array,
  description: PropTypes.array,
  keywords: PropTypes.array,
  image: PropTypes.object,
}

Skill.defaultProps = {
  title: ``,
  description: ``,
}

export default Skill
