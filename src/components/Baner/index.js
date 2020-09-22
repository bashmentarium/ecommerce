import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "./index.css"

const Baner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="banner-wrapper">
      <StaticQuery
        query={pageQuery}
        render={data => {
          return (
            <Slider {...settings} autoplay autoplaySpeed={5000} arrows={false}>
              {data.allStrapiBaner.nodes.map((item, index) => (
                <Img
                  fixed={
                    data.allStrapiBaner.nodes[index].thumbnail.childImageSharp
                      .fixed
                  }
                  key={index}
                />
              ))}
            </Slider>
          )
        }}
      />
    </div>
  )
}

export default Baner

const pageQuery = graphql`
  query Baner {
    allStrapiBaner {
      nodes {
        thumbnail {
          childImageSharp {
            fixed(width: 1280) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
