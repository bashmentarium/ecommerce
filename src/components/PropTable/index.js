import React from "react"
import { getLang } from "../../utils/lang"

import "./index.css"

const PropTable = ({ specs }) => {
  const lang = getLang()

  console.log("specs", specs)

  return (
    <div className="prop-table-wrapper">
      {specs.map((spec, index, array) => {
        if (index % 2 === 0) {
          return (
            <div className="spec-row-odd">
              <div className="spec-row-name">
                {lang === "ro" ? spec.name : spec.name_ru}
              </div>
              <div className="spec-row-value-wrap">
                <div className="spec-row-value">
                  {spec.value} {lang === "ro" ? spec.unit : spec.unit_ru}
                </div>
              </div>
            </div>
          )
        }

        if (index % 2 === 1) {
          return (
            <div className="spec-row-even">
              <div className="spec-row-name">
                {lang === "ro" ? spec.name : spec.name_ru}
              </div>
              <div className="spec-row-value-wrap">
                <div className="spec-row-value">
                  {spec.value} {lang === "ro" ? spec.unit : spec.unit_ru}
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default PropTable
