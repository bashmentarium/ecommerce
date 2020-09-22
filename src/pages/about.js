import React from "react"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Service" />
      <div style={{ minHeight: 700 }}>
        <h2 className="terms-page-name">
          <FormattedMessage id="aboutUs" />
        </h2>

        <h4 className="terms-heading">
          <FormattedMessage id="about_01" />
        </h4>
        <div className="terms-paragraph1">
          <FormattedMessage id="about_02" />
        </div>

        <div className="terms-paragraph1">
          <FormattedMessage id="about_03" />
        </div>
        <div className="terms-paragraph1">
          <FormattedMessage id="about_04" />
        </div>
        <div className="terms-paragraph1">
          <FormattedMessage id="about_05" />
        </div>

        <div className="terms-paragraph1">
          <FormattedMessage id="about_06" />
        </div>
        <div className="terms-paragraph1">
          <FormattedMessage id="about_07" />
        </div>

        <h5 className="terms-heading">
          <FormattedMessage id="about_08" />
        </h5>
        <div className="terms-paragraph3">
          <FormattedMessage id="about_09" />
        </div>

        <div className="terms-paragraph1">
          <FormattedMessage id="about_10" />
        </div>

        <div className="terms-paragraph1">
          <FormattedMessage id="about_11" />
        </div>

        <div className="terms-paragraph1">
          <FormattedMessage id="about_12" />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
