const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: "https://youthful-lamarr-1d1a58.netlify.com/*",
    toPath: "https://cerealconcept.com/:splat",
    isPermanent: true
  })

  return graphql(`
    {
      allFile(
        filter: {
          internal: {mediaType: {eq: "text/markdown"}},
          sourceInstanceName: {eq: "pages_simples"}
        }
      ){
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                url
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages_simples = result.data.allFile.edges

    pages_simples.forEach(edge => {
      createPage({
        path: edge.node.childMarkdownRemark.frontmatter.url,
        component: path.resolve(
          `src/components/templates/page-simple.js`
        ),
        context: {
          slug: edge.node.childMarkdownRemark.fields.slug,
        },
      })
    })
  })
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
