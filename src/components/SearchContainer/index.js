import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"
import { Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import Icon from "../../components/Icon"
import { fromProductSlugToUrl } from "../../utils/products"
import { getLang } from "../../utils/lang"

import "./index.css"

class Search extends Component {
  state = {
    productList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }

  async componentDidMount() {
    Axios.get("https://ingco-backend.herokuapp.com/products?_limit=1000")
      .then(result => {
        const productData = result.data
        this.setState({ productList: productData })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log("====================================")
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log("====================================")
      })
  }

  rebuildIndex = () => {
    const { productList } = this.state
    const dataToSearch = new JsSearch.Search("isbn")
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("isbn")
    dataToSearch.addIndex("name") // sets the index attribute for the data
    dataToSearch.addIndex("name_ru") // sets the index attribute for the data
    dataToSearch.addIndex("numarul_articolului") // sets the index attribute for the data
    dataToSearch.addDocuments(productList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }

  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { productList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? productList : searchResults

    const lang = getLang()

    return (
      <div className="search-bar-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div style={{ margin: "0 auto" }}>
            <div className="search-icon-wrap">
              <Icon
                type="gray_search"
                style={{ margin: `auto auto`, marginTop: 5 }}
              />
            </div>
            <input
              id="Search"
              value={searchQuery}
              onChange={this.searchData}
              className="search-bar"
            />
          </div>
        </form>
        {queryResults.length === 1 && (
          <div className="search-results-container">
            {queryResults.map(product => {
              return (
                <Link
                  to={fromProductSlugToUrl(product.product_id)}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="result-item-wrapper">
                    <img
                      src={product.thumbnail.url}
                      className="search-results-image"
                    />
                    <div className="search-results-name">
                      {lang === "ro" ? product.name : product.name_ru}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default Search
