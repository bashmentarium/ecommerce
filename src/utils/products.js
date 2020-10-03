/**
 * @method getLang
 * @description Given a product slug, return the relative path to single product page
 * @param {String} slug
 * @returns {String} - url
 */
export const fromProductSlugToUrl = (slug) => `/products/${slug}`
