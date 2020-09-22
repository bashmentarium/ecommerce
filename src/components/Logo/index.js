import React from "react"
import logo from "../../images/svg/INGCO_logo.svg"

import "./index.css"

export default () => {
  return (
    <div className="logo-wrapper">
      <div className="logo">
        <img src={logo} style={{ width: 215, height: 60 }} />
      </div>
    </div>
  )
}
