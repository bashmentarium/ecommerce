import React from "react"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../components/Icon"

import image_1 from "../images/service/1.jpeg"
import image_2 from "../images/service/2.jpeg"
import image_3 from "../images/service/3.jpeg"
import image_4 from "../images/service/4.png"

import logo from "../images/svg/INGCO_logo.svg"

import "./service.css"

var URL = require("url").URL

const ServicePage = () => {
  return (
    <Layout>
      <SEO title="Service" />
      <h2 className="cart-heading">
        <FormattedMessage id="serviceCentru" />
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 1265,
        }}
      >
        <div className="service-text-container">
          <div>
            <FormattedMessage id="service_01" />
          </div>
          <div style={{ marginTop: 20 }}>
            <FormattedMessage id="service_02" />
          </div>

          <div>
            <div>
              <FormattedMessage id="service_03" />
            </div>
            <ul className="service-page-list">
              <li className="service-page-list-item">
                <FormattedMessage id="service_04" />
              </li>
              <li className="service-page-list-item">
                <FormattedMessage id="service_05" />
              </li>
              <li className="service-page-list-item">
                <FormattedMessage id="service_06" />
              </li>
              <li className="service-page-list-item">
                <FormattedMessage id="service_07" />
              </li>
            </ul>
          </div>
        </div>

        <div className="service-page-contacts">
          <div>
            <div className="service-contact-heading">
              <FormattedMessage id="contacts" />:
            </div>
            <div className="service-contact-item">
              <FormattedMessage id="tel" />: 067894654
            </div>
            <div className="service-contact-item">
              <FormattedMessage id="fax" />: 022 263561
            </div>
          </div>
          <div>
            <div className="service-contact-heading">
              <FormattedMessage id="openHours" />:
            </div>
            <div className="service-contact-item">
              <FormattedMessage id="daysOfWeek" />: 8:30 – 17:30
            </div>
            <div className="service-contact-item">
              <FormattedMessage id="daysOfWeek_02" />: 8:30 – 15:30
            </div>
          </div>
          <div>
            <div className="service-contact-heading">
              <FormattedMessage id="serviceCenter" />:
            </div>
            <div className="service-contact-item">
              <FormattedMessage id="serviceAddress" />
            </div>
          </div>
        </div>
      </div>

      <div className="service-images-section">
        <div className="service-svg-section">
          <img src={image_4} className="service-image-logo" />
          <Icon type="service" style={{ opacity: 0.1, marginLeft: 250 }} />
          <img src={logo} className="service-ingco-logo" />
          <div className="service-images-text">
            <FormattedMessage id="electroRepairs" />
          </div>
        </div>
        <div className="service-img-wrapper">
          <img src={image_1} className="service-image" />
          <img src={image_2} className="service-image" />
          <img src={image_3} className="service-image" />
        </div>
      </div>

      <h4 className="service-page-algoritm">
        <FormattedMessage id="algorithm" />:
      </h4>
      <div className="service-algoritm-wrapper">
        <div className="service-algoritm-item">
          <div className="service-icon-wrapper">
            <Icon
              type="rotary_phone_black"
              style={{ width: 31, height: 31, margin: `auto 0` }}
            />
          </div>
          <div className="service-algoritm-heading">
            <FormattedMessage id="contactUs" />
          </div>
          <a className="service-call-now" href="tel:+373 69 000 000">
            <FormattedMessage id="callNow" />
          </a>
        </div>
        <Icon type="next" style={{ width: 40, height: 40, marginTop: 25 }} />
        <div className="service-algoritm-item">
          <div className="service-icon-wrapper">
            <Icon
              type="service_gear"
              style={{ width: 35, height: 35, margin: `auto 0` }}
            />
          </div>
          <div className="service-algoritm-heading">
            <FormattedMessage id="diagnostic" />
          </div>
          <div className="service-algoritm-text">
            <FormattedMessage id="days" />
          </div>
        </div>
        <Icon type="next" style={{ width: 40, height: 40, marginTop: 25 }} />
        <div className="service-algoritm-item" style={{ marginTop: 30 }}>
          <div className="service-icon-wrapper">
            <Icon
              type="service"
              style={{ width: 43, height: 43, margin: `auto 0` }}
            />
          </div>
          <div className="service-algoritm-heading">
            <FormattedMessage id="repair" />
          </div>
          <div className="service-algoritm-text">
            *<FormattedMessage id="cond" />
          </div>
        </div>
        <Icon type="next" style={{ width: 40, height: 40, marginTop: 25 }} />
        <div className="service-algoritm-item" style={{ marginTop: -25 }}>
          <div className="service-icon-wrapper">
            <Icon
              type="guarantee"
              style={{ width: 40, height: 40, margin: `auto 0` }}
            />
          </div>
          <div className="service-algoritm-heading">
            <FormattedMessage id="guarant" />
          </div>
        </div>
      </div>

      <h4 className="service-page-algoritm">
        <FormattedMessage id="care" />:
      </h4>

      <div className="service-page-maintainance-text">
        <FormattedMessage id="service_08" />
      </div>
      <div className="service-page-maintainance-text">
        <FormattedMessage id="service_09" />
      </div>
      <div className="service-page-maintainance-text">
        <FormattedMessage id="service_10" />
      </div>
      <div className="service-page-maintainance-text-light">
        *<FormattedMessage id="service_11" />.
      </div>
    </Layout>
  )
}

export default ServicePage
