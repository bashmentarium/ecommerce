import React, { useState } from "react"

import { graphql } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Catalogue from "../components/Catalogue"
import ProductCard from "../components/ProductCard"
import Baner from "../components/Baner"

import "../fonts/FiraSansExtraCondensed-Light.ttf"

import "./index.css"

const IndexPage = ({ data }) => {
  const [visible, setVisible] = useState(true)
  const [showCatalogue, setShowCatalogue] = useState(false)

  const handleClick = () => {
    setShowCatalogue(!showCatalogue)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="catalogue-button" onClick={handleClick}>
        <span className="catalogue-button-text">
          <FormattedMessage id="catalogName" />
        </span>
      </div>
      {showCatalogue && (
        <div
          style={{
            position: "absolute",
            zIndex: 20,
            backgroundColor: "#f4f4f4",
          }}
        >
          <Catalogue setVisible={setVisible} visible={visible} />
        </div>
      )}
      <div
        style={{
          display: "flex",
          marginBottom: 70,
          width: "50%",
          position: "relative",
        }}
        className="index-page-container"
      >
        <Baner />
      </div>
      <div className={"top-wrapper"}>
        <span className={"oferte-de-top"}>
          <FormattedMessage id="oferteTop" />
        </span>
        <div className="products-grid">
          {data.allStrapiProduct.nodes.map(product => {
            return <ProductCard product={product} key={product.strapiId} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allStrapiProduct(filter: { promo_pagina_principala: { eq: true } }) {
      nodes {
        strapiId
        name
        product_id
        price
        thumbnail {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        stock
        name_ru
        description
        description_ru
        reducere
        promo_pagina_principala
        numarul_articolului
        la_comanda
      }
    }
  }
`
