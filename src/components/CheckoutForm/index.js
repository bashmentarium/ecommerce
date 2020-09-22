import React, { useState, useContext } from "react"
import { Formik } from "formik"

import { Link } from "gatsby"
import * as yup from "yup"
import { useIntl, FormattedMessage } from "gatsby-plugin-react-intl"

import { CartContext } from "../../context/cart"

import "./index.css"

export default ({ setSuccess }) => {
  const { cart, clearCart } = useContext(CartContext)
  const intl = useIntl()

  const handleSubmit = async (event, info) => {
    event.preventDefault()

    const data = {
      name: info.name,
      phone: info.phone,
      time: info.time,
      cart,
    }

    const response = await fetch("https://ingco-backend.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    setSuccess(true)

    clearCart()
  }

  return (
    <div className="checkout-form-wrapper">
      <Formik
        initialValues={{
          name: "",
          phone: "",
          time: "9:00 - 12.00",
        }}
        onSubmit={handleSubmit}
        validationSchema={yup.object().shape({
          name: yup.string().required("Numele este obligatoriu"),
          phone: yup
            .string()
            .min(8, "Număr de telefon inexistent")
            .max(12, "Număr de telefon inexistent")
            .required("Numărul de telefon este obligatoriu"),
        })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
        }) => {
          return (
            <>
              <div className="checkout-input-wrapper">
                <label
                  className={
                    touched.name && errors.name
                      ? "checkout-form-error-label-name"
                      : "checkout-form-label-name"
                  }
                  htmlFor="name"
                  id="name-label"
                >
                  <FormattedMessage id="name" />
                </label>
                <input
                  id="name"
                  maxLength={30}
                  value={values.name}
                  onChange={handleChange("name")}
                  onBlur={() => setFieldTouched("name")}
                  className={
                    touched.name
                      ? errors.name
                        ? "checkout-form-error-input-name"
                        : "checkout-form-input-name"
                      : "checkout-form-input-name"
                  }
                  placeholder=""
                  error={touched.name ? errors.name : null}
                />
                {touched.name && errors.name ? (
                  <div className="checkout-form-name-error-message-active">
                    <FormattedMessage id="reqName" />
                  </div>
                ) : (
                  <div className="checkout-form-name-error-message">Eroare</div>
                )}
              </div>
              <div className="checkout-input-wrapper">
                <label
                  className={
                    touched.phone && errors.phone
                      ? "checkout-form-error-label-phone"
                      : "checkout-form-label-phone"
                  }
                  htmlFor="phone"
                  id="phone-label"
                >
                  <FormattedMessage id="telephoneNumber" />
                </label>
                <input
                  id="phone"
                  maxLength={12}
                  value={values.phone}
                  onChange={handleChange("phone")}
                  onBlur={() => setFieldTouched("phone")}
                  className={
                    touched.phone
                      ? errors.phone
                        ? "checkout-form-error-input-phone"
                        : "checkout-form-input-phone"
                      : "checkout-form-input-phone"
                  }
                  error={touched.phone ? errors.phone : null}
                />
                {touched.phone && errors.phone ? (
                  <div className="checkout-form-phone-error-message-active">
                    <FormattedMessage id="reqTel" />
                  </div>
                ) : (
                  <div className="checkout-form-phone-error-message">
                    Eroare
                  </div>
                )}
              </div>
              <div className="checkout-input-wrapper">
                <label className="checkout-form-label-phone" htmlFor="time">
                  <FormattedMessage id="callTime" />
                </label>
                <select
                  className="checkout-form-dropdown"
                  name="time"
                  id="time"
                  onChange={handleChange("time")}
                >
                  <option value="9:00 - 12:00">9:00 - 12:00</option>
                  <option value="12:00 - 15:00">12:00 - 15:00</option>
                  <option value="15:00 - 18:00">15:00 - 18:00</option>
                  <option value="Cît de curînd posibil">
                    {intl.formatMessage({ id: "asap" })}
                  </option>
                </select>
              </div>
              <div className="privacy-wrapper">
                <div className="privacy-text">
                  <FormattedMessage id="privacyLink" />{" "}
                  <Link to="/privacy" className="privacy-link">
                    <FormattedMessage id="privacyPolicy" />
                  </Link>
                  <FormattedMessage id="and" />
                  <Link to="/terms" className="privacy-link">
                    <FormattedMessage id="termsAndCond" />
                  </Link>
                </div>
              </div>
              <button
                className="checkout-form-button"
                onClick={
                  values.name && values.phone && isValid
                    ? event => handleSubmit(event, { ...values })
                    : null
                }
              >
                <FormattedMessage id="buy" />
              </button>
            </>
          )
        }}
      </Formik>
    </div>
  )
}
