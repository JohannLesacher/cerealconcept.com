import React from 'react'
import Img from 'gatsby-image'

const ImageHandler = ({ image, alt }) => {
  const { childImageSharp } = image

  if (!!childImageSharp) {
    // Image normale qui a été process
    return (
      <Img fluid={childImageSharp.fluid} alt={alt} />
    )
  } else if (typeof image.relativePath === 'string' && image.extension === 'svg') {
    // SVG
    const Image = require('../../static/img/' + image.relativePath)
    return (
      <Image />
    )
  }

  return null
}

ImageHandler.defaultProps = {
  alt: ''
}

export default ImageHandler
