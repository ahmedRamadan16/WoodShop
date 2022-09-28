// passes i18n down to react-i18next
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ltr from "./data-ltr.json";
import rtl from "./data-rtl.json";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: ltr
  },
  ar: {
    translation: rtl
  }
};
i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});
export default i18n;
