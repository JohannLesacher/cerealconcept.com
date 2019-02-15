import React from 'react'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: "0 auto", // Used to center the image
      },
    }
  }

  return <Img {...normalizedProps} />
}

const ImageHandler = ({ image, alt, className }) => {
  const { childImageSharp } = image

  if (!!childImageSharp) {
    // Image normale qui a été process
    if (!!childImageSharp.fluid) {
      return (
        <NonStretchedImage fluid={childImageSharp.fluid} alt={alt} className={className} />
      )
    } else {
      return (
        <Img fixed={childImageSharp.fixed} alt={alt} className={className} />
      )
    }
  } else if (typeof image.relativePath === 'string' && image.extension === 'svg') {
    // SVG
    const Image = require('../../static/img/' + image.relativePath)
    return (
      <Image className={className} />
    )
  }

  return null
}

ImageHandler.defaultProps = {
  alt: '',
  className: '',
}

export default ImageHandler
