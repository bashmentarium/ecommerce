import React, { useState, useContext } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import { CartContext } from "../../context/cart"
import { formatPrice } from "../../utils/formatPrice"
import { getLang } from "../../utils/lang"

import Icon from "../../components/Icon"
import LinkedProducts from "../../components/LinkedProducts"
import Layout from "../../components/layout"
import Catalogue from "../../components/Catalogue"
import PropTable from "../../components/PropTable"
import ProdDescription from "../../components/ProdDescription"

import "./index.css"

const ProductTemplate = ({ data }) => {
  const [qty, setQty] = useState(1)

  const [showCatalogue, setShowCatalogue] = useState(false)
  const [showList, setShowList] = useState(false)

  const { addToCart, addToFavorites, removeFromFavorites } = useContext(
    CartContext
  )
  const { strapiIds } = useContext(CartContext)

  const handleClick = () => {
    setShowCatalogue(!showCatalogue)
    setShowList(!showList)
  }

  const lang = getLang()

  const isFavorite = strapiIds.indexOf(data.strapiProduct.strapiId)

  let specs = []

  if (data.strapiProduct.tip_filter) {
    specs = [
      ...specs,
      {
        name: "Tip",
        name_ru: "Тип",
        value: data.strapiProduct.tip_filter,
      },
    ]
  }
  if (data.strapiProduct.putere_filter) {
    specs = [
      ...specs,
      {
        name: "Putere",
        name_ru: "Мощность",
        value: data.strapiProduct.putere_filter,
        unit: "(W)",
        unit_ru: "(Вт)",
      },
    ]
  }
  if (data.strapiProduct.tensiune_filter) {
    specs = [
      ...specs,
      {
        name: "Tensiune",
        name_ru: "Напряжение",
        value: data.strapiProduct.tensiune_filter,
        unit: "(V)",
        unit_ru: "(В)",
      },
    ]
  }

  if (data.strapiProduct.model) {
    specs = [
      ...specs,
      {
        name: "Model",
        name_ru: "Модель",
        value: data.strapiProduct.model,
      },
    ]
  }

  if (data.strapiProduct.turatii_in_gol) {
    specs = [
      ...specs,
      {
        name: "Turații în gol",
        name_ru: "Обороты в холостую",
        value: data.strapiProduct.turatii_in_gol,
        unit: "(turații/minut)",
        unit_ru: "(обороты/минуту)",
      },
    ]
  }

  if (data.strapiProduct.capacitate_mandrina) {
    specs = [
      ...specs,
      {
        name: "Capacitatea mandrină",
        name_ru: "Емкость патрона",
        value: data.strapiProduct.capacitate_mandrina,
      },
    ]
  }
  if (data.strapiProduct.cuplu_maxim) {
    specs = [
      ...specs,
      {
        name: "Cuplu maxim",
        name_ru: "Максимальный крутящий момент",
        value: data.strapiProduct.cuplu_maxim,
      },
    ]
  }
  if (data.strapiProduct.frecventa_de_percutie) {
    specs = [
      ...specs,
      {
        name: "Frecvența de percuție",
        name_ru: "Частота ударов",
        value: data.strapiProduct.frecventa_de_percutie,
      },
    ]
  }
  if (data.strapiProduct.energie_de_impact) {
    specs = [
      ...specs,
      {
        name: "Energie de impact",
        name_ru: "Энергия ударов",
        value: data.strapiProduct.energie_de_impact,
        unit: "(J)",
        unit_ru: "(Дж)",
      },
    ]
  }

  if (data.strapiProduct.setari_cuplu) {
    specs = [
      ...specs,
      {
        name: "Setări cuplu",
        name_ru: "Настройки крутящего момента",
        value: data.strapiProduct.setari_cuplu,
      },
    ]
  }
  if (data.strapiProduct.capacitate_baterie) {
    specs = [
      ...specs,
      {
        name: "Capacitatea bateriei",
        name_ru: "Емкость батареи",
        value: data.strapiProduct.capacitate_baterie,
      },
    ]
  }
  if (data.strapiProduct.diametru_maxim_de_gaurire_beton) {
    specs = [
      ...specs,
      {
        name: "Diametru maxim de găurire beton",
        name_ru: "Максимальный диаметр сверления бетона",
        value: data.strapiProduct.diametru_maxim_de_gaurire_beton,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }
  if (data.strapiProduct.diametru_maxim_de_gaurire_otel) {
    specs = [
      ...specs,
      {
        name: "Diametru maxim de găurire oțel",
        name_ru: "Максимальный диаметр сверления стали",
        value: data.strapiProduct.diametru_maxim_de_gaurire_otel,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }
  if (data.strapiProduct.diametru_maxim_de_gaurire_lemn) {
    specs = [
      ...specs,
      {
        name: "Diametru maxim de găurire lemn",
        name_ru: "Максимальный диаметр сверления дерева",
        value: data.strapiProduct.diametru_maxim_de_gaurire_lemn,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }
  if (data.strapiProduct.capacitatea_maxima_de_gaurire) {
    specs = [
      ...specs,
      {
        name: "Capacitatea maximă de găurire",
        name_ru: "Максимальная мощность сверления",
        value: data.strapiProduct.capacitatea_maxima_de_gaurire,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }

  if (data.strapiProduct.temperatura) {
    specs = [
      ...specs,
      {
        name: "Temperatura",
        name_ru: "Температура",
        value: data.strapiProduct.temperatura,
        unit: "(°C)",
        unit_ru: "(°C)",
      },
    ]
  }
  if (data.strapiProduct.capacitatea_de_taiere_lemn) {
    specs = [
      ...specs,
      {
        name: "Capacitatea de tăiere lemn",
        name_ru: "Режущая способность по дереву",
        value: data.strapiProduct.capacitatea_de_taiere_lemn,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }
  if (data.strapiProduct.capacitatea_de_taiere_otel) {
    specs = [
      ...specs,
      {
        name: "Capacitatea de tăiere oțel",
        name_ru: "Режущая способность по стали",
        value: data.strapiProduct.capacitatea_de_taiere_otel,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }
  if (data.strapiProduct.presiunea_maxima) {
    specs = [
      ...specs,
      {
        name: "Presiunea maximă",
        name_ru: "Максимальное давление",
        value: data.strapiProduct.presiunea_maxima,
        unit: "(Bar)",
        unit_ru: "(Бар)",
      },
    ]
  }
  if (data.strapiProduct.flux_de_aer_maxim) {
    specs = [
      ...specs,
      {
        name: "Flux de aer maxim",
        name_ru: "Максимальный воздушный поток",
        value: data.strapiProduct.flux_de_aer_maxim,
        unit: "(L/minut)",
        unit_ru: "(Л/минуту)",
      },
    ]
  }
  if (data.strapiProduct.diametrul_discului) {
    specs = [
      ...specs,
      {
        name: "Diamtrul discului",
        name_ru: "Диаметр диска",
        value: data.strapiProduct.diametrul_discului,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }
  if (data.strapiProduct.lungime_activa) {
    specs = [
      ...specs,
      {
        name: "Lungime activă",
        name_ru: "Активная длина",
        value: data.strapiProduct.lungime_activa,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }
  if (data.strapiProduct.dimensiuni) {
    specs = [
      ...specs,
      {
        name: "Dimensiuni",
        name_ru: "Размеры",
        value: data.strapiProduct.dimensiuni,
      },
    ]
  }
  if (data.strapiProduct.rezistenta) {
    specs = [
      ...specs,
      {
        name: "Rezistența",
        name_ru: "Сопротивление",
        value: data.strapiProduct.rezistenta,
        unit: "(Ω)",
        unit_ru: "(Ω)",
      },
    ]
  }
  if (data.strapiProduct.curent_continuu) {
    specs = [
      ...specs,
      {
        name: "Curent continuu",
        name_ru: "Постоянный ток",
        value: data.strapiProduct.curent_continuu,
        unit: "(mA)",
        unit_ru: "(мА)",
      },
    ]
  }

  if (data.strapiProduct.tensiune_continua) {
    specs = [
      ...specs,
      {
        name: "Tensiune continuă",
        name_ru: "Постоянное давление",
        value: data.strapiProduct.tensiune_continua,
        unit: "(V)",
        unit_ru: "(В)",
      },
    ]
  }
  if (data.strapiProduct.curent_alternativ) {
    specs = [
      ...specs,
      {
        name: "Curent alternativ",
        name_ru: "Переменный ток",
        value: data.strapiProduct.curent_alternativ,
        unit: "(A)",
        unit_ru: "(A)",
      },
    ]
  }
  if (data.strapiProduct.firul_axului) {
    specs = [
      ...specs,
      {
        name: "Firul axului",
        name_ru: "Резьба вала",
        value: data.strapiProduct.firul_axului,
      },
    ]
  }
  if (data.strapiProduct.lungime) {
    specs = [
      ...specs,
      {
        name: "Lungime",
        name_ru: "Длина",
        value: data.strapiProduct.lungime,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }
  if (data.strapiProduct.grosime) {
    specs = [
      ...specs,
      {
        name: "Grosime",
        name_ru: "Толщина",
        value: data.strapiProduct.grosime,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }
  if (data.strapiProduct.diametru) {
    specs = [
      ...specs,
      {
        name: "Diametru",
        name_ru: "Диаметр",
        value: data.strapiProduct.diametru,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }
  if (data.strapiProduct.diametru_fir) {
    specs = [
      ...specs,
      {
        name: "Diametrul firului",
        name_ru: "Диаметр провода",
        value: data.strapiProduct.diametru_fir,
        unit: "(mm)",
        unit_ru: "(мм)",
      },
    ]
  }

  return (
    <Layout>
      <div className="catalogue-button" onClick={handleClick}>
        <span className="catalogue-button-text">
          <FormattedMessage id="catalogName" />
        </span>
      </div>
      {showCatalogue ? (
        <Catalogue setVisible={setShowList} visible={showList} />
      ) : null}
      {data.strapiProduct.reducere ? (
        <>
          <div
            className={
              showCatalogue ? "product-ribbon-big-high" : "product-ribbon-big"
            }
          >
            <div className="product-sale-big">
              -{data.strapiProduct.reducere}%
            </div>
          </div>
          <div
            className={
              showCatalogue
                ? "product-ribbon-triangle-high"
                : "product-ribbon-triangle"
            }
          />
        </>
      ) : null}
      <div
        className={
          showCatalogue ? "product-box-wrapper-high" : "product-box-wrapper"
        }
      >
        <div className="product-box-left">
          <div className="product-box-image-wrapper">
            <Img
              fixed={data.strapiProduct.thumbnail.childImageSharp.fixed}
              style={{ margin: `auto` }}
            />
          </div>
        </div>
        <div className="product-box-right">
          <h2 className="catalogue-product-name">
            {lang === "ro"
              ? data.strapiProduct.name
              : data.strapiProduct.name_ru}
          </h2>
          <div className="catalogue-product-info">
            <div className="catalogue-product-info-key">
              <FormattedMessage id="producator" />:{" "}
            </div>
            <div className="catalogue-product-info-value">INGCO</div>
          </div>
          <div className="catalogue-product-info">
            <div className="catalogue-product-info-key">
              <FormattedMessage id="numarArticol" />:{" "}
            </div>
            <div className="catalogue-product-info-value">
              {data.strapiProduct.numarul_articolului}
            </div>
          </div>
          <p className="product-box-price">
            {formatPrice(data.strapiProduct.price)}{" "}
            <FormattedMessage id="lei" />
          </p>
          <div className="product-box-amount">
            <div
              className="product-box-subtract"
              onClick={() => {
                if (qty > 1) {
                  setQty(qty - 1)
                }
              }}
            >
              <div className="product-box-sign">-</div>
            </div>
            <input
              className="product-box-value"
              type="number"
              value={qty}
              onChange={event => setQty(event.target.value)}
            />
            <div className="product-box-add" onClick={() => setQty(qty + 1)}>
              <div className="product-box-sign">+</div>
            </div>
          </div>
          <button
            className="product-add-cart"
            onClick={() => addToCart(data.strapiProduct, qty)}
          >
            <Icon type="cart" style={{ margin: "auto" }} />
            <span className="product-button-text">
              <FormattedMessage id="addToCart" />
            </span>
          </button>
          <div
            onClick={
              isFavorite === -1
                ? () => addToFavorites(data.strapiProduct)
                : () => removeFromFavorites(data.strapiProduct)
            }
          >
            <Icon
              type={isFavorite === -1 ? "gray_heart" : "orange_heart"}
              style={{
                position: "absolute",
                top: -40,
                right: 20,
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
      {specs.length > 0 && (
        <div className="product-table-heading">
          <FormattedMessage id="caracteristici" />
        </div>
      )}
      <PropTable specs={specs} />
      {data.strapiProduct.description && (
        <ProdDescription
          description={
            lang === "ro"
              ? data.strapiProduct.description
              : data.strapiProduct.description_ru
          }
        />
      )}
      <h3 className="catalogue-product-together">
        <FormattedMessage id="alteProduse" /> INGCO
      </h3>
      <LinkedProducts />
    </Layout>
  )
}

export default ProductTemplate

export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    strapiProduct(id: { eq: $id }) {
      strapiId
      model
      tip_filter
      tensiune_filter
      putere_filter
      name
      name_ru
      product_id
      la_comanda
      turatii_in_gol
      description
      description_ru
      numarul_articolului
      stock
      capacitate_mandrina
      cuplu_maxim
      frecventa_de_percutie
      energie_de_impact
      setari_cuplu
      capacitate_baterie
      temperatura
      capacitate_de_taiere_lemn
      capacitate_de_taiere_otel
      presiunea_maxima
      flux_de_aer_maxim
      diametrul_discului
      lungime_activa
      dimensiuni
      curent_alternativ
      firul_axului
      diametru
      lungime
      diametru_fir
      diametru_maxim_gaurire_beton
      tip_transmisie
      price
      promo_pagina_principala
      reducere
      thumbnail {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
