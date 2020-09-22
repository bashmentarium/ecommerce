import React from "react"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GuaranteePage = () => {
  return (
    <Layout>
      <SEO title="Service" />
      <div style={{ minHeight: 700, fontFamily: "FiraSansRegular" }}>
        <h2 className="terms-page-name">
          <FormattedMessage id="refunds" />
        </h2>

        <span className="terms-paragraph1">
          <FormattedMessage id="guarantee_01" />
        </span>
        <br />

        <h4 className="terms-heading">
          <FormattedMessage id="guarantee_02" />
        </h4>
        <span className="terms-paragraph1">
          <FormattedMessage id="guarantee_03" />
        </span>
        <div className="terms-paragraph1">
          <FormattedMessage id="guarantee_04" />
        </div>
        <div className="terms-paragraph1">
          <FormattedMessage id="guarantee_05" />
        </div>

        <ul className="terms-list">
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_06" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_07" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_08" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_09" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_10" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_11" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_12" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_13" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_14" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_15" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_16" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_17" />
          </li>
        </ul>

        <h4 className="terms-heading">
          <FormattedMessage id="guarantee_18" />:
        </h4>
        <ul>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_19" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_20" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_21" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_22" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_23" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_24" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_25" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_26" />
          </li>
        </ul>

        <h3 className="terms-heading">
          <FormattedMessage id="guarantee_02" />
        </h3>
        <span className="terms-paragraph">
          <FormattedMessage id="guarantee_27" />
        </span>
        <br />

        <div className="terms-paragraph1">
          <FormattedMessage id="guarantee_28" />
        </div>
        <br />

        <ul>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_29" />
          </li>
        </ul>
        <div className="terms-list-item4">
          <FormattedMessage id="guarantee_30" />
        </div>
        <ul style={{ marginTop: 20 }}>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_31" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_32" />
          </li>
          <li className="terms-list-item1">
            <FormattedMessage id="guarantee_33" />
          </li>
        </ul>
        <div className="terms-paragraph1">
          <FormattedMessage id="guarantee_34" />
        </div>
        <div className="terms-paragraph1">
          <FormattedMessage id="guarantee_35" />
        </div>
      </div>
    </Layout>
  )
}

export default GuaranteePage
