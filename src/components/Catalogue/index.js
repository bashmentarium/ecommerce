import React, { useState } from "react"

import { StaticQuery, graphql } from "gatsby"

import CatalogueItem from "../CatalogueItem"

import "./index.css"

const Catalogue = ({ visible, setVisible }) => {
  const pageQuery = graphql`
    query CategoryQuery {
      allStrapiCategory(
        sort: {
          fields: [
            created_at
            created_at
            subcategories___created_at
            subsubcategories___created_at
          ]
          order: ASC
        }
      ) {
        nodes {
          name
          name_ru
          strapiId
          type
          subcategories {
            category
            name_ro
            name_ru
            subcategory_id
            id
          }
          subsubcategories {
            category
            subcategory
            name_ro
            name_ru
            id
            subsubcategory_id
          }
        }
      }
    }
  `

  const [showList, setShowList] = useState(false)

  const handleMouse = arg => {
    setVisible(arg)
    setShowList(!arg)
  }

  return (
    <div
      className={visible ? "catalogue-list" : "catalogue-list-wide"}
      onMouseEnter={() => handleMouse(false)}
      onMouseLeave={() => handleMouse(true)}
    >
      <StaticQuery
        query={pageQuery}
        render={data => {
          const { nodes } = data.allStrapiCategory

          const newNodes = nodes.map(
            ({
              name,
              name_ru,
              strapiId,
              type,
              subcategories,
              subsubcategories,
            }) => {
              return {
                name,
                name_ru,
                strapiId,
                type,
                subcategories: {
                  ...subcategories,
                  subsubcategories,
                },
              }
            }
          )

          return (
            <div className="filter-options-container">
              {newNodes.map((item, index, array) => {
                return (
                  <>
                    <CatalogueItem
                      item={item}
                      key={item.strapiId}
                      setVisible={setVisible}
                    />
                    {index !== array.length - 1 && (
                      <div className="divider" style={{ marginLeft: 5 }} />
                    )}
                  </>
                )
              })}
            </div>
          )
        }}
      />
    </div>
  )
}

export default Catalogue
