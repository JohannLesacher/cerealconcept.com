import React from 'react'
import ImageHandler from "../imageHandler"
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

export default ({node}) => {
  if (!node.asset) {
    return null
  }

  let maxWidth = 300
  if (node.size) {
    switch(node.size) {
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

  let fluid = getFluidGatsbyImage(node.asset._id, {maxWidth: maxWidth}, clientConfig.sanity)

  if (typeof fluid !== `undefined`) {
    fluid.presentationWidth = maxWidth
  }
  const image = {
    asset: {
      fluid: fluid
    }
  }

  const classNames = `content-figure is-${node.align} is-${node.size}`
  return (
    <figure className={classNames}>
      <ImageHandler image={image} alt={node.alt} />
      {node.caption && <figcaption>{node.caption}</figcaption>}
    </figure>
  )
}
