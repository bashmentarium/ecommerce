import React, { useContext } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import { fromProductSlugToUrl } from "../../utils/products"
import { formatPrice } from "../../utils/formatPrice"
import { CartContext } from "../../context/cart"
import { getLang } from "../../utils/lang"
import Icon from "../Icon"

import "./index.css"

const ProductCard = ({ product }) => {
  const { addToCart, addToFavorites, removeFromFavorites } = useContext(
    CartContext
  )

  const { strapiIds } = useContext(CartContext)

  const isFavorite = strapiIds.indexOf(product.strapiId)

  const lang = getLang()

  return (
    <div style={{ position: "relative", width: 285 }}>
      <Link
        to={fromProductSlugToUrl(product.product_id)}
        style={{
          textDecoration: "none",
          width: 300,
          height: 400,
        }}
        key={product.product_id}
      >
        <div className="product-card-container">
          <div className="product-card-wrapper">
            {product.reducere ? (
              <>
                <div className="product-ribbon">
                  <span className="product-sale">-{product.reducere}%</span>
                </div>
                <div className="product-triangle" />
              </>
            ) : null}
            <div className="product-image-wrapper">
              <Img
                fixed={product.thumbnail.childImageSharp.fixed}
                style={{ width: "220px", height: "220px" }}
              />
            </div>
            <div>
              <div className="product-name-wrapper">
                <p className="product-name">
                  {lang === "ro" ? product.name : product.name_ru}
                </p>
              </div>
            </div>
            {/* <p className="product-description">{shortenedDescription}</p> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: 265,
              }}
            >
              <p className="product-price">
                {formatPrice(product.price)} <FormattedMessage id="lei" />
              </p>
              <p className="product-stock">
                {product.la_comanda === true ? (
                  <span className="product-stock-black">
                    <FormattedMessage id="laComanda" />
                  </span>
                ) : product.stock ? (
                  <span className="product-stock-green">
                    <FormattedMessage id="inStock" />
                  </span>
                ) : (
                  <span className="product-stock-red">
                    <FormattedMessage id="waiting" />
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="product-cart-wrapper">
        <button
          className="product-group1"
          onClick={() => addToCart(product, 1)}
        >
          <Icon
            type="gray_cart"
            style={{ width: 19, height: 17, margin: `auto` }}
          />
          <span className="product-cart-add-text">
            <FormattedMessage id="addToCart" />
          </span>
        </button>
        <div className="product-cart-divider" />
        <button
          className="product-group2"
          onClick={
            isFavorite === -1
              ? () => addToFavorites(product)
              : () => removeFromFavorites(product)
          }
        >
          <Icon
            type={isFavorite === -1 ? "gray_heart" : "orange_heart"}
            style={{ width: 17, height: 18, margin: `17px auto 0` }}
          />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
