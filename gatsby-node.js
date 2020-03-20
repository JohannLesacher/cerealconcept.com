const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: "https://cerealconcept.netlify.com/*",
    toPath: "https://www.cerealconcept.com/:splat",
    isPermanent: true
  })

  const pages = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  pages.data.allSanityPage.edges.forEach(page => {
    createPage({
      path: page.node.slug.current,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        slug: page.node.slug.current,
      },
    })
  })

  const references = await graphql(`
    {
      allSanityClient {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  references.data.allSanityClient.edges.forEach(reference => {
    createPage({
      path: 'nos-references/' + reference.node.slug.current,
      component: path.resolve(`./src/templates/reference.js`),
      context: {
        slug: reference.node.slug.current,
      },
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
