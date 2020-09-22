import React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import Icon from "../Icon"

import "./index.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="contact">
          <div className="footer-link-heading">
            <FormattedMessage id="contactTel" />:
          </div>
          <div className="phone">
            <div className="phone-link-text">
              <FormattedMessage id="sales" />:
            </div>
            <a className="phone-link" href="tel:+373 69 000 000">
              +373 69 000 000
            </a>
          </div>
        </div>
        {/* <div className="footer-links-wrapper">
          <div className="footer-link-heading">
            <FormattedMessage id="links" />:
          </div>

          <Link
            to="/service"
            style={{
              textDecoration: "none",
              color: "gray",
            }}
          >
            <div className="footer-link-text">
              <FormattedMessage id="serviceCentru" />
            </div>
          </Link>

          <Link
            to="/distribution"
            style={{
              textDecoration: "none",
              color: "gray",
            }}
          >
            <div className="footer-link-text">
              <FormattedMessage id="magazineRegionale" />
            </div>
          </Link>
        </div> */}
        <div className="footer-links-wrapper">
          <div className="footer-link-heading">
            <FormattedMessage id="info" />:
          </div>

          <Link
            to="/guarantee"
            style={{
              textDecoration: "none",
              color: "gray",
            }}
          >
            <div className="footer-link-text">
              <FormattedMessage id="guarantee" />
            </div>
          </Link>

          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "gray",
            }}
          >
            <div className="footer-link-text">
              <FormattedMessage id="aboutUs" />
            </div>
          </Link>

          <Link
            to="/delivery"
            style={{
              textDecoration: "none",
              color: "gray",
            }}
          >
            <div className="footer-link-text">
              <FormattedMessage id="delivery" />
            </div>
          </Link>

          {/* <Link
            to="/privacy"
            style={{
              textDecoration: "none",
              color: "gray",
            }}
          >
            <div className="footer-link-text">
              <FormattedMessage id="privacy" />
            </div>
          </Link> */}

          {/* <Link
            to="/terms"
            style={{
              textDecoration: "none",
              color: "gray",
            }}
          >
            <div className="footer-link-text">
              <FormattedMessage id="terms" />
            </div>
          </Link> */}
        </div>
        <div className="social">
          <div className="social-link-icon">
            <Icon
              type="facebook"
              style={{ width: 25, cursor: "pointer", marginTop: 5 }}
            />
          </div>

          <div className="social-link-icon">
            <Icon
              type="youtube"
              style={{ width: 35, cursor: "pointer", marginTop: 5 }}
            />
          </div>
        </div>
        <div className="copyright">
          <div className="footer-link-heading">
            <FormattedMessage id="copyright" />:
          </div>
          <div className="row">{new Date().getFullYear()} © Company Name</div>

          <div className="text">MD-2200</div>
        </div>
      </div>
    </footer>
  )
}
