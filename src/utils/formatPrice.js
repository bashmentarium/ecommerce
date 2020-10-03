/**
 * @method formatPrice
 * @description Formats the price passed as an argument
 * @param {Number} priceWithDecimal
 * @returns {String} - formatted price
 */
export const formatPrice = (priceWithDecimal) => {
  const realPrice = parseInt(priceWithDecimal) / 100

  return realPrice.toLocaleString('md-MD', {})
}
