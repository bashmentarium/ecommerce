import React, { useState, createContext } from "react"
import {
  getCart,
  saveCart,
  getFavorites,
  saveFavorites,
  getStrapiIds,
  saveStrapiIds,
} from "../utils/cart"

export const CartContext = createContext(null)

export default ({ children }) => {
  const [cart, setCart] = useState(getCart())
  const [favorites, setFavorites] = useState(getFavorites())
  const [strapiIds, setStrapiIds] = useState(getStrapiIds())

  const updateCart = updatedCart => {
    setCart(updatedCart)
    saveCart(updatedCart)
  }

  const addToCart = (product, qty = 1) => {
    const copy = [...cart]

    // If the product is already there
    const indexOfProduct = copy.findIndex(
      alreadyInCart => alreadyInCart.strapiId === product.strapiId
    )

    if (indexOfProduct !== -1) {
      //Update the quantity
      copy[indexOfProduct].qty += parseInt(qty)

      if (copy[indexOfProduct].qty === 0) {
        // Remove the product from the cart
        copy.splice(indexOfProduct, 1)
      }
    } else {
      // Set the quantity to 1
      product.qty = parseInt(qty)

      //Push the product
      copy.push(product)
    }

    updateCart(copy)
  }

  const removeFromCart = product => {
    const copy = [...cart]
    const newCart = copy.filter(
      alreadyInCart => alreadyInCart.strapiId !== product.strapiId
    )
    updateCart(newCart)
  }

  const clearCart = () => {
    const updatedCart = []
    updateCart(updatedCart)
  }

  const updateFavorites = updatedFavorites => {
    setFavorites(updatedFavorites)
    saveFavorites(updatedFavorites)
  }

  const updateStrapiIds = updatedStrapiIds => {
    setStrapiIds(updatedStrapiIds)
    saveStrapiIds(updatedStrapiIds)
  }

  const addToFavorites = product => {
    const copy = [...favorites]
    const strapiIdsCopy = [...strapiIds]

    // If the product is already there
    const indexOfProduct = copy.findIndex(
      alreadyInFavorites => alreadyInFavorites.strapiId === product.strapiId
    )

    if (indexOfProduct === -1) {
      //Update favorites
      copy.push(product)
      strapiIdsCopy.push(product.strapiId)
    }

    updateFavorites(copy)
    updateStrapiIds(strapiIdsCopy)
  }

  const removeFromFavorites = product => {
    const copy = [...favorites]
    const strapiIdsCopy = [...strapiIds]

    const updatedCopy = copy.filter(el => el.strapiId !== product.strapiId)
    const updatedIds = strapiIdsCopy.filter(el => el !== product.strapiId)

    updateFavorites(updatedCopy)
    updateStrapiIds(updatedIds)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        favorites,
        addToFavorites,
        strapiIds,
        removeFromFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
