import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import { CartContext } from "../context/cart"

import Icon from "../components/Icon"
import Logo from "../components/Logo"
import Search from "../components/SearchContainer"
import Languages from "../components/LangSwitch"

import "./header.css"

const Header = () => {
  const [showPhoneNr, setShowPhoneNr] = useState(false)
  const { cart, favorites } = useContext(CartContext)

  const cartItemsQty = cart.reduce((counter, product) => {
    return counter + product.qty
  }, 0)

  const favoritesItemsQty = favorites.length

  return (
    <>
      <header className="header">
        <div
          style={{
            margin: `0 auto`,
            display: "flex",
            width: 1280,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link to="/">
              <Logo />
            </Link>
          </h1>
          {/* <Link to="/distribution" style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <div style={{ width: 30, height: 30 }}>
                <Icon type="map" />
              </div>
              <div className="header-icon-name">
                <FormattedMessage id="magazineRegionale" />
              </div>
            </div>
          </Link>
          <Link to="/service" style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                cursor: "pointer",
              }}
            >
              <div style={{ width: 30, height: 30, margin: `auto` }}>
                <Icon type="service" />
              </div>
              <div className="header-icon-name">
                <FormattedMessage id="serviceCentru" />
              </div>
            </div>
          </Link> */}
          <div
            style={{
              display: "flex",
              height: 60,

              alignItems: "center",
            }}
            onMouseEnter={() => setShowPhoneNr(true)}
            onMouseLeave={() => setShowPhoneNr(false)}
          >
            <div
              style={{
                width: 180,
                height: 50,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon
                type="phone"
                style={{
                  width: 20,
                  margin: `auto`,
                  height: 30,
                }}
              />
              <a className="phone-number-main" href="tel:+373 69 000 000">
                +373 69 000 000
              </a>
            </div>
            {showPhoneNr ? (
              <div className="header-phone-numbers">
                <div className="header-phone-numbers-item">
                  <a
                    href="viber://contact?number=%2B37369000 000"
                    style={{ textDecoration: "none", textAlign: "center" }}
                  >
                    <Icon
                      type="viber"
                      style={{
                        width: 30,
                        margin: `auto`,
                        height: 30,
                      }}
                    />
                    <div className="header-phone-text">Viber</div>
                  </a>
                </div>
                <div className="header-phone-numbers-item">
                  <a
                    href="tel:+373 22 000 000"
                    style={{ textDecoration: "none", textAlign: "center" }}
                  >
                    <Icon
                      type="rotary_phone"
                      style={{
                        width: 30,
                        margin: `auto`,
                        height: 30,
                      }}
                    />
                    <div className="header-phone-text">
                      <FormattedMessage id="fix" />
                    </div>
                  </a>
                </div>
              </div>
            ) : null}
          </div>
          {/* <Link to="/blog" style={{ textDecoration: "none", color: "black" }}>
            <div className="header-blog-text">
              <Icon
                type="news"
                style={{
                  width: 23,
                  height: 23,
                  margin: `auto`,
                }}
              />
              <div
                style={{
                  marginLeft: 2,
                }}
              >
                <FormattedMessage id="news" />
              </div>
            </div>
          </Link> */}

          <Search />

          <div className="wrapper">
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "#000",
              }}
            >
              <Icon
                type="cart"
                style={{ width: 20, margin: `auto 0`, height: 30 }}
                label={`(${cartItemsQty})`}
              />
            </Link>
            <Link
              to="/favorites"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <Icon
                type="heart"
                style={{ width: 18, margin: `auto 0`, height: 30 }}
                label={`(${favoritesItemsQty})`}
              />
            </Link>
            {/* <Link to="/profile" style={{ textDecoration: "none", color: "#000" }}>
            <Icon
              type="profile"
              style={{ width: 40, margin: `auto 0`, height: 30 }}
            />
          </Link> */}
            <Languages />
          </div>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
