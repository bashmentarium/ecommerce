import React, { useContext } from "react"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import { CartContext } from "../context/cart"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductCard from "../components/ProductCard"

import "./favorites.css"

export default () => {
  const { favorites } = useContext(CartContext)

  return (
    <Layout>
      <SEO title="Favorite" />
      <h2 className="cart-heading">
        <FormattedMessage id="favorites" />
      </h2>
      <div className="favorites-container">
        {favorites.length > 0 ? (
          <div className="favorites-wrapper">
            {favorites.map(product => {
              return <ProductCard product={product} key={product.strapiId} />
            })}
          </div>
        ) : (
          <div className="cart-item-container">
            <div className="cart-empty-heading">
              <FormattedMessage id="noFavProd" />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
