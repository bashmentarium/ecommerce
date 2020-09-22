import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ProductCard from "../ProductCard"

import "./index.css"

const LinkedProducts = () => {
  return (
    <StaticQuery
      query={PageQuery}
      render={data => {
        return (
          <div className="linked-products-wrapper">
            {data.allStrapiPromotional.nodes.map(item => {
              return <ProductCard product={item} key={item.strapiId} />
            })}
          </div>
        )
      }}
    />
  )
}

export default LinkedProducts

export const PageQuery = graphql`
  query LinkedProductsQuery {
    allStrapiPromotional {
      nodes {
        strapiId
        name
        name_ru
        product_id
        price
        reducere
        stock
        la_comanda
        thumbnail {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
