/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import CartContextProvider from "./src/context/cart"

export const wrapRootElement = ({ element }) => {
  return <CartContextProvider>{element}</CartContextProvider>
}
