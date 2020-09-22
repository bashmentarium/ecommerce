import React, { useState, useCallback, useContext } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import { CartContext } from "../context/cart"
import { formatPrice } from "../utils/formatPrice"
import { cartTotal } from "../utils/cart"
import { fromProductSlugToUrl } from "../utils/products"
import { getLang } from "../utils/lang"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CheckoutForm from "../components/CheckoutForm"
import Icon from "../components/Icon"

import "./cart.css"

export default () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [, updateState] = useState()

  const forceUpdate = useCallback(() => updateState({}), [])

  const lang = getLang()

  return (
    <Layout>
      <SEO title="Cart" />
      <h2 className="cart-heading">
        <FormattedMessage id="cart" />
      </h2>
      {success ? (
        <div className="order-container">
          <FormattedMessage id="success" />
        </div>
      ) : cart.length > 0 ? (
        <>
          <div className="cart-list-heading">
            <div>
              <FormattedMessage id="product" />
            </div>
            <div>
              <FormattedMessage id="price" />
            </div>
            <div style={{ textAlign: "center" }}>
              <FormattedMessage id="quantity" />
            </div>
          </div>
          <div className="cart-item-container">
            {cart.map(product => {
              console.log(product)
              return (
                <div className="cart-item-wrapper" key={product.product_id}>
                  <Link
                    to={fromProductSlugToUrl(product.product_id)}
                    style={{
                      textDecoration: "none",
                      color: "#333333",
                    }}
                    key={product.product_id}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Img
                        fixed={product.thumbnail.childImageSharp.fixed}
                        style={{ width: 100, height: 100 }}
                      />
                      <div className="cart-item-name">
                        {lang === "ro" ? product.name : product.name_ru}
                      </div>
                    </div>
                  </Link>
                  <div className="cart-item-price">
                    {formatPrice(product.price)}
                  </div>
                  <div className="cart-item-quantity">
                    <div
                      className="cart-item-add-button"
                      onClick={() => {
                        addToCart(product, -1)
                        forceUpdate()
                      }}
                    >
                      -
                    </div>
                    <div className="cart-item-value">{product.qty}</div>
                    <div
                      className="cart-item-add-button"
                      onClick={() => {
                        addToCart(product, 1)
                        forceUpdate()
                      }}
                    >
                      +
                    </div>
                  </div>
                  <div
                    className="remove-from-cart-button"
                    onClick={() => removeFromCart(product)}
                  >
                    <Icon
                      type="close"
                      style={{ width: 22, height: 22, marginTop: 5 }}
                    />
                  </div>
                </div>
              )
            })}

            <h3 className="cart-total-text">
              <FormattedMessage id="total" />: {formatPrice(cartTotal(cart))}{" "}
              <FormattedMessage id="lei" />
            </h3>
            {cart && cart.length > 0 && (
              <CheckoutForm cart={cart} setSuccess={setSuccess} />
            )}
          </div>
        </>
      ) : (
        <div className="cart-item-container">
          <div className="cart-empty-heading">
            <FormattedMessage id="noCartProd" />
          </div>
        </div>
      )}
    </Layout>
  )
}
