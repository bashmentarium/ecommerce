import React from "react"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import "./index.css"

const showdown = require("showdown")
const converter = new showdown.Converter({ simpleLineBreaks: true })

const ProdDescription = ({ description = "" }) => {
  const result = converter.makeHtml(description)

  return (
    <div className="product-description-container">
      <div className="product-description-heading">
        <FormattedMessage id="descriere" />
      </div>
      <div className="product-description-wrapper">
        <div
          dangerouslySetInnerHTML={{ __html: result }}
          className="product-description-text"
        />
      </div>
    </div>
  )
}

export default ProdDescription
