import React, {useState, useEffect} from 'react'
import {graphql, Link} from 'gatsby'
import deepmerge from 'deepmerge'
import {Range} from 'rc-slider'
import {FormattedMessage} from 'gatsby-plugin-react-intl'

import 'rc-slider/assets/index.css'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ProductCard from '../../components/ProductCard'
import Catalogue from '../../components/Catalogue'
import Icon from '../../components/Icon'
import {getLang} from '../../utils/lang'

import withLocation from '../../hoc/withLocation'

import './index.css'

let filterItemsOld = {
  tip_filter: {
    id: 'tip_filter',
    urlId: 'tip',
    name: 'Tip',
    values: [],
  },
  putere_filter: {
    id: 'putere_filter',
    urlId: 'putere',
    name: 'Putere (W)',
    values: [],
  },
  tensiune_filter: {
    id: 'tensiune_filter',
    urlId: 'tensiune',
    name: 'Tensiune (V)',
    values: [],
  },
  price: {
    id: 'price',
    urlId: 'price',
    name: 'Preț',
    values: [],
  },
}

const initialState = {
  tip_filter: {
    id: 'tip_filter',
    urlId: 'tip',
    name: 'Tip',
    values: [],
  },
  putere_filter: {
    id: 'putere_filter',
    urlId: 'putere',
    name: 'Putere (W)',
    values: [],
  },
  tensiune_filter: {
    id: 'tensiune_filter',
    urlId: 'tensiune',
    name: 'Tensiune (V)',
    values: [],
  },
  price: {
    id: 'price',
    urlId: 'price',
    name: 'Preț',
    values: {start: 0, end: 0},
  },
}

const SubcategoryTemplate = ({data, location, search}) => {
  const nodes = deepmerge([], data.allStrapiProduct.nodes)

  const [value, setValue] = useState([])
  const [searchParams, setSearchParams] = useState(initialState)
  const [showCatalogue, setShowCatalogue] = useState(false)
  const [showList, setShowList] = useState(false)

  const handleClick = () => {
    setShowCatalogue(!showCatalogue)
    setShowList(!showList)
  }

  const compareNumbers = (a, b) => a - b

  const filterItems = deepmerge({}, filterItemsOld)

  nodes.forEach((item) => {
    const {tip_filter, putere_filter, tensiune_filter, price} = item

    if (tip_filter) {
      const found = filterItems.tip_filter.values.find(
        (el) => el === tip_filter
      )
      if (!found) {
        filterItems.tip_filter.values = [
          ...filterItems.tip_filter.values,
          tip_filter,
        ]
        filterItems.tip_filter.values.sort(compareNumbers)
      }
    }

    if (putere_filter) {
      const found = filterItems.putere_filter.values.find(
        (el) => el === putere_filter
      )
      if (!found) {
        filterItems.putere_filter.values = [
          ...filterItems.putere_filter.values,
          putere_filter,
        ]
        filterItems.putere_filter.values.sort(compareNumbers)
      }
    }

    if (tensiune_filter) {
      const found = filterItems.tensiune_filter.values.find(
        (el) => el === tensiune_filter
      )
      if (!found) {
        filterItems.tensiune_filter.values = [
          ...filterItems.tensiune_filter.values,
          tensiune_filter,
        ]
        filterItems.tensiune_filter.values.sort(compareNumbers)
      }
    }

    if (price) {
      const found = filterItems.price.values.find((el) => el === price)
      if (!found) {
        filterItems.price.values.push(price)
        filterItems.price.values.sort(compareNumbers)
      }
    }
  })

  const handleChangeStart = () => {
    console.log('Change event started')
  }

  const handleChange = (value) => {
    setValue(value)
  }

  useEffect(() => {}, [searchParams])

  const handleChangeComplete = (value) => {}

  const handleSelect = (id, filter, searchParam, event) => {
    event.preventDefault()

    if (searchParams[id].values.indexOf(searchParam) === -1) {
      setSearchParams({
        ...searchParams,
        [id]: {
          ...filter,
          values: [...searchParams[id].values, searchParam],
        },
      })
    } else {
      const values = searchParams[id].values.filter(
        (element) => element !== searchParam
      )
      setSearchParams({
        ...searchParams,
        [id]: {
          ...filter,
          values,
        },
      })
    }
  }

  function paramsToObject(entries) {
    let result = {}
    for (let entry of entries) {
      // each 'entry' is a [key, value] tupple
      const [key, value] = entry
      const temp = value.split(',').filter((x) => x)
      result[key] = temp
    }
    return result
  }

  let filterParameters
  let newProducts

  const getItems = () => {
    const filters = Object.values(filterItems)
    return filters.map((filter, index) => {
      return (
        <div style={{marginTop: 15}} key={index}>
          {filter.values.length >= 2 && (
            <div className='filter-property-name'>
              {filter.name} {filter.id === 'price' && '(MDL)'}
            </div>
          )}
          {filter.id === 'price' ? (
            <div className='slider-wrapper'>
              <div className='slider-value'>
                <div className='slider-value-item1'>{value[0] || 0}</div>
                <div className='slider-value-item2'>{value[1] || 0}</div>
              </div>
              <Range
                min={filter.values[0]}
                max={filter.values[filter.values.length - 1]}
                onChange={handleChange}
                onBeforeChange={handleChangeStart}
                onAfterChange={() => handleChangeComplete(value)}
              />
            </div>
          ) : (
            filter.values.length >= 2 && (
              <div className='filter-items-container'>
                {filter.values.map((value, index) => {
                  const url = new URLSearchParams(location.search)

                  filterParameters = paramsToObject(url)

                  const currentFilter = (search[filter.id] || '').split(',')

                  const addFilter = (value) => {
                    const list = [currentFilter, value]
                    url.set(filter.id, list)
                  }

                  if (filterParameters[filter.id]) {
                    const tempNodes = nodes.map((product) => {
                      return {
                        ...product,
                        [filter.id]:
                          product[filter.id] !== null &&
                          product[filter.id].toString(),
                      }
                    })
                    newProducts = tempNodes.filter(
                      (element) =>
                        (element[filter.id] !== null &&
                          element[filter.id].toString()) ===
                        filterParameters[filter.id].find(
                          (el) => el === element[filter.id]
                        )
                    )
                  }

                  const removeFilter = (value) => {
                    const list = currentFilter
                      .filter((v) => v.toString() != value.toString())
                      .filter(Boolean)
                    if (list.length) {
                      url.set(filter.id, list)
                    } else {
                      url.delete(filter.id)
                    }
                  }

                  // решаем добавить или убрать
                  const addOrDelete = (value) => {
                    if (currentFilter.includes(value.toString())) {
                      removeFilter(value)
                    } else {
                      addFilter(value)
                    }
                  }

                  addOrDelete(value)

                  return (
                    <div
                      className='filter-item-wrapper'
                      style={{display: 'flex'}}
                      key={index}
                      onClick={(event) =>
                        handleSelect(filter.id, filter, value, event)
                      }
                    >
                      <Link
                        to={location.pathname + '?' + url.toString()}
                        state={{
                          name: `${nodes[0].subsubcategories[0].name_ro}`,
                        }}
                        className='filter-items-link'
                      >
                        <Icon
                          type={
                            filterParameters[filter.id] &&
                            filterParameters[filter.id].indexOf(
                              value.toString()
                            ) !== -1
                              ? 'radio_active'
                              : 'radio'
                          }
                          style={{margin: `auto`, cursor: 'pointer'}}
                        />
                        <div className='filter-item-text'>{value}</div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            )
          )}
        </div>
      )
    })
  }

  const lang = getLang()

  return (
    <Layout>
      <SEO title='Products' />
      <div>
        <div style={{display: 'flex'}}>
          <button className='sub-catalogue-button' onClick={handleClick}>
            <span className='catalogue-button-text'>
              <FormattedMessage id='catalogName' />
            </span>
          </button>
          {!showCatalogue && (
            <div className='sub-heading-name-wrapper'>
              <div
                className='sub-heading-text'
                style={{
                  fontFamily: 'FiraSansRegular',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  paddingTop: 15,
                  fontSize: 20,
                }}
              >
                {nodes[0]
                  ? lang === 'ro'
                    ? nodes[0].subsubcategories[0].name_ro
                    : nodes[0].subsubcategories[0].name_ru
                  : ''}
              </div>
            </div>
          )}
        </div>
        {nodes.length <= 0 && !showCatalogue && (
          <div className='no-products-heading'>
            <FormattedMessage id='noProd' />
          </div>
        )}
        {showCatalogue && (
          <div>
            <Catalogue setVisible={setShowList} visible={showList} />
          </div>
        )}
        <div
          className={
            showCatalogue
              ? 'products-page-wrapper-high'
              : 'products-page-wrapper'
          }
        >
          {/* {nodes.length > 0 && (
          <div className="products-page-filter">
            <Icon type="filter" style={{ margin: `0 auto` }} />
            <div className="products-page-filter-wrapper">{getItems()}</div>
          </div>
        )}
        <div className="products-container">
          {newProducts
            ? newProducts.map(product => {
                return <ProductCard product={product} key={product.strapiId} />
              })
            : nodes.length > 0 &&
              
        </div> */}
          <div className='products-container'>
            {nodes.map((product) => {
              return <ProductCard product={product} key={product.strapiId} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default withLocation(SubcategoryTemplate)

export const query = graphql`
  query SubProductQuery($id: Int!) {
    allStrapiProduct(filter: {subcategories: {elemMatch: {id: {eq: $id}}}}) {
      nodes {
        strapiId
        name
        name_ru
        product_id
        price
        reducere
        stock
        thumbnail {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        description
        numarul_articolului
        subcategories {
          id
          name_ro
          name_ru
        }
        tip_filter
        putere_filter
        tensiune_filter
        model
        diametru
        turatii_in_gol
        lungime
        masa
        tip_transmisie
      }
    }
  }
`
