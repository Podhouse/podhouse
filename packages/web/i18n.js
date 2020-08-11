const NextI18Next = require("next-i18next").default;

const path = require("path");

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: [
    "da",
    "de",
    "en",
    "es",
    "fr",
    "it",
    "no",
    "pl",
    "pt",
    "ru",
    "swe",
    "tr",
    "el",
    "ja",
    "ko",
    "zh",
  ],
  localePath: path.resolve("./public/static/locales"),
});
