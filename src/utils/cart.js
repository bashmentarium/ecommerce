/**
 * @method saveCart
 * @description Saves the content of the cart to Local Storage
 * given the passed cart object.
 * @param {any[]} cart
 */
export const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

/**
 * @method getCart
 * @description Fetches the contents of the cart object from
 * the Local Storage
 * @returns {any[]} cart
 */
export const getCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
      return cart
    }
  } catch (e) {}
  return []
}

/**
 * @method cartTotal
 * @description Calculates the products costs total given a cart object
 * as a parameter
 * @param {any[]} cart
 * @returns {Number} cost
 */
export const cartTotal = (cart) => {
  if (cart.length === 0) {
    return 0
  }

  // Sum up all of the individual products costs
  const total = cart.reduce((counter, product) => {
    return counter + product.price * product.qty
  }, 0)

  return total
}

/**
 * @method clearCart
 * @description Removes the cart object from the Local Storage
 */
export const clearCart = () => {
  localStorage.removeItem('cart')
}

/**
 * @method saveFavorites
 * @description Adds the passed product as an item to the favorites
 * object in the LocalStorage
 * @param {any[]} favorites
 */
export const saveFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

/**
 * @method getFavorites
 * @description Fetches the contents of the favorites object from
 * the Local Storage
 * @returns {any[]} Favorites
 */
export const getFavorites = () => {
  try {
    const favorites = JSON.parse(localStorage.getItem('favorites'))

    if (favorites) {
      return favorites
    }
  } catch (e) {}
  return []
}

/**
 * @method getStrapiIds
 * @description Fetches the id's of items marked as favorites
 * @returns {any[]} strapiIds
 */
export const getStrapiIds = () => {
  try {
    const strapiIds = JSON.parse(localStorage.getItem('strapiIds'))

    if (strapiIds) {
      return strapiIds
    }
  } catch (e) {}
  return []
}

/**
 * @method getStrapiIds
 * @description Fetches the id's of the products that are marked as favorites
 * @param {any[]} favorites
 */
export const saveStrapiIds = (favorites) => {
  localStorage.setItem('strapiIds', JSON.stringify(favorites))
}
