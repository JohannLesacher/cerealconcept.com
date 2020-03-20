import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../client-config'
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

const ImageHandler = ({ image, alt, className, style }) => {
  const { childImageSharp } = image

  if (!!childImageSharp) {
    // Image normale qui a été process
    if (!!childImageSharp.fluid) {
      return (
        <NonStretchedImage fluid={childImageSharp.fluid} alt={alt} className={className} style={style} />
      )
    } else {
      return (
        <Img fixed={childImageSharp.fixed} alt={alt} className={className} />
      )
    }
  } else if (typeof image.asset !== undefined && image.asset._type === "sanity.imageAsset") {
    // Sanity Image
    let maxWidth = 750

    if (image.size) {
      switch(image.size) {
        case 'small':
          maxWidth = 150
          break
        case 'medium':
          maxWidth = 300
          break
        case 'large':
          maxWidth = 750
          break
        case 'full':
          maxWidth = 1500
          break
        default:
          maxWidth = 300
          break
      }
    }

    let fluid = getFluidGatsbyImage(image.asset, {maxWidth: maxWidth}, clientConfig.sanity)

    if (typeof fluid !== `undefined`) {
      fluid.presentationWidth = maxWidth
    }

    return (
      <NonStretchedImage fluid={fluid} alt={alt} className={className} style={style} />
    )
  }

  return null
}

ImageHandler.defaultProps = {
  alt: '',
  className: '',
}

export default ImageHandler
