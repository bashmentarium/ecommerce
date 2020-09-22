import React from "react"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DeliveryPage = () => {
  return (
    <Layout>
      <SEO title="Service" />
      <div>
        <h2 className="terms-page-name">
          <FormattedMessage id="delivery" />
        </h2>

        <h4 className="terms-heading">
          <FormattedMessage id="delivery_01" />
        </h4>
        <span className="terms-paragraph">
          <FormattedMessage id="delivery_02" />
        </span>
        <br />

        <h4 className="terms-heading">
          <FormattedMessage id="delivery_03" />
        </h4>
        <span className="terms-paragraph">
          <FormattedMessage id="delivery_04" />
        </span>
        <div className="terms-paragraph1">
          <FormattedMessage id="delivery_05" />
        </div>
        <div className="terms-paragraph1">
          <FormattedMessage id="delivery_06" />
        </div>

        <div className="terms-paragraph1">
          <FormattedMessage id="delivery_07" />
        </div>

        <h4 className="terms-heading">
          <FormattedMessage id="delivery_08" />
        </h4>
        <span className="terms-paragraph">
          <FormattedMessage id="delivery_09" />
        </span>

        <div className="terms-paragraph1">
          <FormattedMessage id="delivery_10" />
        </div>

        <div className="terms-paragraph1">
          <FormattedMessage id="delivery_11" />
        </div>
      </div>
    </Layout>
  )
}

export default DeliveryPage
