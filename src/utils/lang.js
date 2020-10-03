/**
 * @method getLang
 * @description Fetches the current locale language from the Local Storage
 * @returns {String} - current language
 */
export const getLang = () => {
  try {
    const lang = localStorage.getItem('gatsby-intl-language')

    if (lang) {
      return lang
    }
  } catch (e) {}
  return 'ro'
}
