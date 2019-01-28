import PropTypes from 'prop-types'
import React from 'react'

import './skill.scss'

const Skill = ({title, description, keywords, image}) => (
  <div className="columns skill is-vcentered">
    <div className="column is-4">
      {image}
    </div>
    <div className="column is-8">
      <h2 className="title is-2">{title}</h2>
      <h4 className="subtitle is-5">{description}</h4>
      <div className="tags">
        {keywords ? keywords.map((keyword, i) => (
          <span className="tag" key={i}>{keyword}</span>
        )) : ''}
      </div>
    </div>
  </div>
)

Skill.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Skill.defaultProps = {
  title: ``,
  description: ``,
}

export default Skill
