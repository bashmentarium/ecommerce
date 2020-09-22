import React, { useState } from "react"
import { Link } from "gatsby"

import Icon from "../Icon"
import { fromProductSlugToUrl } from "../../utils/products"
import { getLang } from "../../utils/lang"

import "./index.css"

const fixtures = {
  drill: {
    position: "absolute",
    top: 13,
    left: 15,
  },
  hammer: {
    position: "absolute",
    top: 13,
    left: 16,
  },
  compass: {
    position: "absolute",
    top: 8,
    left: 18,
  },
  welding: {
    position: "absolute",
    top: 12,
    left: 13,
  },
  jackhammer: {
    position: "absolute",
    top: 8,
    left: 11,
  },
  generator: {
    position: "absolute",
    top: 11,
    left: 13,
  },
  protection: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  accesories: {
    position: "absolute",
    top: 10,
    left: 13,
  },
  sawblade: {
    position: "absolute",
    top: 13,
    left: 16,
  },
  pump: {
    position: "absolute",
    top: 10,
    left: 14,
  },
  miscellaneous: {
    position: "absolute",
    top: 15,
    left: 18,
  },
}

const CatalogueItem = ({ item, setVisible }) => {
  const [showList, setShowList] = useState(false)

  const { name, name_ru, type, subcategories } = item

  const handleMouse = arg => {
    setVisible(arg)
    setShowList(!arg)
  }

  const lang = getLang()

  return (
    <div
      onMouseEnter={() => handleMouse(false)}
      onMouseLeave={() => handleMouse(true)}
    >
      <div
        className={showList ? "list-item-wrapper-active" : "list-item-wrapper"}
      >
        <div className="list-item-circle">
          <Icon type={type} style={fixtures[type]} />
        </div>
        <div className="list-item-text">{lang === "ro" ? name : name_ru}</div>
      </div>
      {showList ? (
        <div>
          <div className="catalogue-item-subc">
            {subcategories.subsubcategories.map((item, index, array) => {
              return (
                <Link
                  to={fromProductSlugToUrl(item.subsubcategory_id)}
                  style={{ textDecoration: "none" }}
                  state={{ name: lang === "ro" ? item.name_ro : item.name_ru }}
                  key={item.id}
                >
                  <div className="list-item-sub">
                    {lang === "ro" ? item.name_ro : item.name_ru}
                  </div>
                  {index !== array.length - 1 && <div className="divider" />}
                </Link>
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default CatalogueItem
