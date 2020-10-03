import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import ProductCard from '../ProductCard'

import './index.css'

const LinkedProducts = () => {
  return (
    <StaticQuery
      render={(data) => {
        return (
          <div className='linked-products-wrapper'>
            {data.allStrapiPromotional.nodes.map((item) => {
              return <ProductCard product={item} key={item.strapiId} />
            })}
          </div>
        )
      }}
    />
  )
}

export default LinkedProducts
