import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getLang } from "../utils/lang"
import { FormattedMessage } from "gatsby-plugin-react-intl"

import "./blog.css"

const showdown = require("showdown")
const converter = new showdown.Converter({ simpleLineBreaks: true })

const months = [
  "Ianuarie",
  "Februarie",
  "Martie",
  "Aprilie",
  "Mai",
  "Iunie",
  "Iulie",
  "August",
  "Septembrie",
  "Octombrie",
  "Noiembrie",
  "Decembrie",
]

export default ({ data }) => {
  const { nodes } = data.allStrapiPost

  const lang = getLang()

  return (
    <Layout>
      <SEO title="News" />
      <h2 className="cart-heading">
        <FormattedMessage id="blog" />
      </h2>
      <div className="posts-wrapper">
        {nodes.map(post => {
          console.log(post)
          console.log(lang)
          let html
          if (lang === "ro") {
            html = post.post_text
          } else {
            html = post.post_text_ru
          }

          const result = converter.makeHtml(html)

          const date = new Date(post.created_at)

          const month = months[date.getMonth()]
          const year = date.getFullYear()
          const day = date.getDate()

          const newDate = `${day}/${month}/${year}`

          return (
            <div className="post-container">
              <div className="heading-date-wrapper">
                <div className="post-heading-name">
                  {lang === "ro" ? post.name : post.name_ru}
                </div>
                <div className="post-date">
                  <FormattedMessage id="newsDate" />: {newDate}
                </div>
              </div>
              <Img
                className="post-image"
                fixed={post.post_image.childImageSharp.fixed}
              />
              <div
                dangerouslySetInnerHTML={{ __html: result }}
                className="post-text"
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostsQuery {
    allStrapiPost {
      nodes {
        created_at
        name
        name_ru
        post_text
        post_text_ru
        post_image {
          childImageSharp {
            fixed(width: 1260) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
