/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
require('url-search-params-polyfill')

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions

  const generateProductPages = makeRequest(
    graphql,
    `
      {
        allStrapiProduct {
          edges {
            node {
              strapiId
              product_id
              id
            }
          }
        }
      }
    `
  ).then((result) => {
    result.data.allStrapiProduct.edges.forEach(({node}) => {
      createPage({
        path: `/products/${node.product_id}`,
        component: path.resolve(`src/templates/product/index.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  const generateSubcategoryPages = makeRequest(
    graphql,
    `
    {
      allStrapiSubcategory{
        edges {
          node {
            strapiId
            subcategory_id
          }
        }
      }
    }
    `
  ).then((result) => {
    result.data.allStrapiSubcategory.edges.forEach(({node}) => {
      createPage({
        path: `/products/${node.subcategory_id}`,
        component: path.resolve(`src/templates/subcategory/index.js`),
        context: {
          id: node.strapiId,
        },
      })
    })
  })

  return Promise.all([generateProductPages, generateSubcategoryPages])
}
