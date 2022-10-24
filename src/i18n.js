import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translationEn, translationRu } from "./translations";

const resources = {
  en: {
    translation: translationEn,
  },
  ru: {
    translation: translationRu,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
