import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"

import "./index.css"

const languageName = {
  ro: "RO",
  ru: "RU",
}

const Languages = () => {
  return (
    <div style={{ marginRight: -15 }}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `black` : `gray`,
                marginRight: 5,
                cursor: `pointer`,
              }}
              className="header-language"
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Languages
