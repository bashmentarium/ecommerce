export const saveCart = cart => {
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const getCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart"))
    if (cart) {
      return cart
    }
  } catch (e) {}
  return []
}

export const cartTotal = cart => {
  if (cart.length === 0) {
    return 0
  }

  // Sum up all of the individual products costs
  const total = cart.reduce((counter, product) => {
    return counter + product.price * product.qty
  }, 0)

  return total
}

export const clearCart = () => {
  localStorage.removeItem("cart")
}

export const saveFavorites = favorites => {
  localStorage.setItem("favorites", JSON.stringify(favorites))
}

export const getFavorites = () => {
  try {
    const favorites = JSON.parse(localStorage.getItem("favorites"))

    if (favorites) {
      return favorites
    }
  } catch (e) {}
  return []
}

export const getStrapiIds = () => {
  try {
    const strapiIds = JSON.parse(localStorage.getItem("strapiIds"))

    if (strapiIds) {
      return strapiIds
    }
  } catch (e) {}
  return []
}

export const saveStrapiIds = favorites => {
  localStorage.setItem("strapiIds", JSON.stringify(favorites))
}
