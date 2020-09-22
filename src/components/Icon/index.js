import React from "react"
import cart from "../../images/svg/cart.svg"
import facebook from "../../images/svg/facebook.svg"
import heart from "../../images/svg/heart.svg"
import instagram from "../../images/svg/instagram.svg"
import mastercard from "../../images/svg/mastercard.svg"
import paypal from "../../images/svg/paypal.svg"
import profile from "../../images/svg/profile.svg"
import twitter from "../../images/svg/twitter.svg"
import visa from "../../images/svg/visa.svg"
import youtube from "../../images/svg/youtube.svg"

import car from "../../images/svg/car.svg"
import drill from "../../images/svg/drill.svg"
import hammer from "../../images/svg/hammer.svg"
import compass from "../../images/svg/compass.svg"
import welding from "../../images/svg/welding.svg"
import jackhammer from "../../images/svg/jackhammer.svg"
import generator from "../../images/svg/generator.svg"
import protection from "../../images/svg/protection.svg"
import saw_blade from "../../images/svg/saw_blade.svg"
import pump from "../../images/svg/pump.svg"
import accesories from "../../images/svg/accesories.svg"
import gray_cart from "../../images/svg/gray_cart.svg"
import gray_heart from "../../images/svg/gray_heart.svg"
import gray_search from "../../images/svg/gray_search.svg"
import orange_heart from "../../images/svg/orange_heart.svg"
import phone from "../../images/svg/phone.svg"
import viber from "../../images/svg/viber.svg"
import rotary_phone from "../../images/svg/rotary_phone.svg"
import miscellaneous from "../../images/svg/miscellaneous.svg"
import filter from "../../images/svg/filter.svg"
import radio from "../../images/svg/radio.svg"
import radio_active from "../../images/svg/radio_active.svg"
import map from "../../images/svg/map.svg"
import service from "../../images/svg/service.svg"
import rotary_phone_black from "../../images/svg/rotary_phone_black.svg"
import guarantee from "../../images/svg/guarantee.svg"
import service_gear from "../../images/svg/service_gear.svg"
import next from "../../images/svg/next.svg"
import news from "../../images/svg/news.svg"
import close from "../../images/svg/close.svg"

import "./index.css"

export default function Icon({ type, style, label }) {
  const showSvg = type => {
    switch (type) {
      case "cart":
        return cart
      case "facebook":
        return facebook
      case "heart":
        return heart
      case "instagram":
        return instagram
      case "mastercard":
        return mastercard
      case "paypal":
        return paypal
      case "profile":
        return profile
      case "twitter":
        return twitter
      case "visa":
        return visa
      case "youtube":
        return youtube
      case "car":
        return car
      case "drill":
        return drill
      case "hammer":
        return hammer
      case "compass":
        return compass
      case "welding":
        return welding
      case "jackhammer":
        return jackhammer
      case "generator":
        return generator
      case "protection":
        return protection
      case "sawblade":
        return saw_blade
      case "pump":
        return pump
      case "accesories":
        return accesories
      case "gray_heart":
        return gray_heart
      case "gray_cart":
        return gray_cart
      case "gray_search":
        return gray_search
      case "orange_heart":
        return orange_heart
      case "phone":
        return phone
      case "viber":
        return viber
      case "rotary_phone":
        return rotary_phone
      case "miscellaneous":
        return miscellaneous
      case "filter":
        return filter
      case "radio":
        return radio
      case "radio_active":
        return radio_active
      case "map":
        return map
      case "service":
        return service
      case "rotary_phone_black":
        return rotary_phone_black
      case "service_gear":
        return service_gear
      case "guarantee":
        return guarantee
      case "next":
        return next
      case "news":
        return news
      case "close":
        return close
      default:
        return null
    }
  }
  return (
    <div className="icon">
      <img src={showSvg(type)} style={style ? { ...style } : null} alt="" />
      {label ? <div className="label">{label}</div> : null}
    </div>
  )
}
