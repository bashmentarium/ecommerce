export const getLang = () => {
  try {
    const lang = localStorage.getItem("gatsby-intl-language")

    if (lang) {
      return lang
    }
  } catch (e) {}
  return "ro"
}
