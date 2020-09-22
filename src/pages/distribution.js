import React, { useState } from "react"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import banner from "../images/distribution-banner.jpeg"
import moldova_map from "../images/moldova_map.webp"

import "./distribution.css"

const nord = [
  {
    city_name: "R-ul Sîngerei",
  },
  {
    city_name: "Or. Sîngerei",
  },
  {
    city_name: "Or. Telenești",
  },
  {
    city_name: "Or. Florești",
  },
  {
    city_name: "Or. Șoldănești",
  },
  {
    city_name: "Or. Soroca",
  },
  {
    city_name: "Or. Bălți",
  },
  {
    city_name: "Or. Fălești",
  },
  {
    city_name: "Or. Glodeni",
  },
  {
    city_name: "Or. Rîșcani",
  },
]
const centru = [
  {
    city_name: "Or. Hîncești",
  },
  {
    city_name: "Or. Călărași",
  },
  {
    city_name: "Or. Ungheni",
  },
  {
    city_name: "Or. Anenii Noi",
  },
  {
    city_name: "R-ul Nisporeni",
  },
  {
    city_name: "Or. Nisporeni",
  },
  {
    city_name: "Or. Anenii Noi",
  },
  {
    city_name: "R-ul Hîncești",
  },
  {
    city_name: "Or. Hîncești",
  },
  {
    city_name: "Or. Orhei",
  },
  {
    city_name: "R-ul Călărași",
  },
  {
    city_name: "R-ul Căușeni",
  },
  {
    city_name: "Or. Strășeni",
  },
  {
    city_name: "Or. Durlești",
  },
  {
    city_name: "R-ul Nisporeni",
  },
  {
    city_name: "R-ul Leușeni",
  },
  {
    city_name: "Or. Ialoveni",
  },
  {
    city_name: "R-ul Cimișlia",
  },
  {
    city_name: "R-ul Ștefan Vodă",
  },
]
const sud = [
  {
    city_name: "Or. Iargara",
  },
  {
    city_name: "Or. Cantemir",
  },
  {
    city_name: "Or. Cahul",
  },
  {
    city_name: "Or. Vulcănești",
  },
  {
    city_name: "Or. Taraclia",
  },
  {
    city_name: "Or. Ceadîr-Lunga",
  },
  {
    city_name: "Or. Comrat",
  },
]

const allInOne = {
  "R-ul Sîngerei": [
    "satul Sîngereii Noi",
    "satul Drăgănești",
    "satul Grigorăuca",
    "satul Chișcăreni",
  ],
  "Or. Sîngerei": ["str. Independenței 150"],
  "Or. Telenești": ["str. Dacia 15/1", "str. Renașterii 122"],
  "Or. Florești": ["str. Gării 4/2", "str. Gării 3/6"],
  "Or. Șoldănești": ["str. Prieteniei 6/13", "str. Prieteniei 18"],
  "Or. Soroca": [
    "str. Ștefan cel Mare 123",
    "str. Constantin Stere 24",
    "str. Ștefan cel Mare 110",
  ],
  "Or. Bălți": [
    "str. Mihai Viteazul 35A",
    "str. Decebal 134 A",
    "str. Feroviarilor 38A",
  ],
  "Or. Fălești": [
    "str. Ștefan cel Mare 78",
    "str. Pieții 9",
    "str. Mihai Eminescu 56",
  ],
  "Or. Glodeni": [
    "str. Decebal 11",
    "str. Mihai Eminescu 19A",
    "satul Balatina",
  ],
  "Or. Rîșcani": ["str. Etimității 5/24"],
  "Or. Hîncești": ["str. 31 August 150", "satul Cărpineni"],
  "Or. Călărași": ["str. Maria Cebotari 10", "str. Alexandru cel Bun 127"],
  "Or. Ungheni": ["str. Vlad Țepeș", "str. Ungureanu Oleg 12"],
  "Or. Anenii Noi": [
    "str. Concilierii Naționale 38",
    "str. Concilierii Natione 22",
  ],
  "R-ul Nisporeni": ["satul Iurceni", "satul Ciorăști"],
  "Or. Nisporeni": ["str. Suveranității 21"],
  "R-ul Hîncești": ["satul Bujor"],
  "Or. Orhei": ["str. Unirii 51", "str. Unirii 57"],
  "R-ul Călărași": ["satul Sipoteni"],
  "R-ul Căușeni": ["sat Copanca"],
  "Or. Strășeni": ["str. Ștefan cel Mare 70A"],
  "Or. Durlești": ["str. Alexandru Orlov 1C"],
  "R-ul Leușeni": ["satul Dancu"],
  "Or. Ialoveni": [
    "str. Alexandru cel Bun 19B",
    "str. Ștefaniuc 7",
    "str. Hîncești 347",
  ],
  "R-ul Cimișlia": ["satul Gura Galbenă"],
  "R-ul Ștefan Vodă": ["satul Răscăieți"],
  "Or. Iargara": ["str Ștefan Vodă, 88"],
  "Or. Cantemir": ["Piața Centrală"],
  "Or. Cahul": ["str. Mateevici 10", "str. Ștefan cel Mare"],
  "Or. Vulcănești": ["str. Lenin 37/A", "str. Funze 4"],
  "Or. Taraclia": ["str Voczalinaia 30"],
  "Or. Ceadîr-Lunga": ["str. Lenin 156", "str. Lenin 90/3"],
  "Or. Comrat": ["str. Treticov 11", "str. Eliberării 1/B"],
}

const cities = {
  nord,
  centru,
  sud,
}

const DistributionPage = () => {
  const [zone, setZone] = useState("nord")
  const [shop, setShop] = useState(["R-ul Sîngerei"])

  const handleClick = zone => {
    setZone(zone)
  }

  const getManagerName = () => {
    if (zone === "sud") {
      return "Stepan"
    } else if (zone === "nord") {
      return "Oleg"
    } else if (zone === "centru") {
      return "Mihail"
    }
  }

  const getManagerPhone = () => {
    if (zone === "nord") {
      return "+373 69 602 590"
    } else if (zone === "centru") {
      return "+373 69 532 293"
    } else if (zone === "sud") {
      return "+373 69 092 277"
    }
  }

  const handleChange = e => {
    setShop(e.target.value)
  }

  return (
    <Layout>
      <SEO title="Distribution" />
      <h2 className="cart-heading">
        <FormattedMessage id="magazineRegionale" />
      </h2>
      <div className="distribution-page-container">
        <div className="distribution-page-paragraph">
          <FormattedMessage id="distributii_01" />
        </div>
        <div className="distribution-banner-wrapper">
          <img src={banner} />
          <div className="distribution-banner-text">
            <div className="distribution-banner-text-item">
              <FormattedMessage id="distributii_02" />
            </div>
            <div className="distribution-banner-text-item">
              <FormattedMessage id="distributii_03" />
            </div>
            <div className="distribution-banner-text-item">
              <FormattedMessage id="distributii_04" />
            </div>
          </div>
        </div>

        <div className="distribution-map-container">
          <h4 className="distribution-heading-region">
            <FormattedMessage id="shopList" />
          </h4>
          <div className="distribution-map-info">
            <div className="distribution-info-top-row">
              <div
                className={
                  zone === "nord"
                    ? "distribution-top-row-item-active"
                    : "distribution-top-row-item"
                }
                onClick={() => handleClick("nord")}
              >
                <FormattedMessage id="north" />
              </div>
              <div
                className={
                  zone === "centru"
                    ? "distribution-top-row-item-active"
                    : "distribution-top-row-item"
                }
                onClick={() => handleClick("centru")}
              >
                <FormattedMessage id="center" />
              </div>
              <div
                className={
                  zone === "sud"
                    ? "distribution-top-row-item-active"
                    : "distribution-top-row-item"
                }
                onClick={() => handleClick("sud")}
              >
                <FormattedMessage id="south" />
              </div>
            </div>
            <div className="distribution-manager-name">
              <FormattedMessage id="manager" />: {getManagerName()}
            </div>
            <div className="distribution-manager-phone">
              <FormattedMessage id="telephone" />:
              <a
                href={`tel:${getManagerPhone()}`}
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  marginLeft: 12,
                  fontFamily: "FiraSansMedium",
                }}
              >
                {getManagerPhone()}
              </a>
            </div>
            <div className="distribution-column">
              <div className="distribution-choose-city">
                <div className="distribution-choose-heading">
                  <FormattedMessage id="chooseCity" />
                </div>
              </div>
              <select
                className="distribution-select-wrapper"
                onChange={handleChange}
              >
                {cities[zone].map(city => {
                  return (
                    <option className="distribution-select-option">
                      {city.city_name}
                    </option>
                  )
                })}
              </select>
              <div className="villages-wrapper">
                {zone &&
                  allInOne[shop].map(item => (
                    <div className="distribution-select-option22">{item}</div>
                  ))}
              </div>
            </div>
          </div>
          <div className="distribution-map">
            <img src={moldova_map} style={{ width: 350, height: 421 }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DistributionPage
