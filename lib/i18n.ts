import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enCommon from '../locales/en/common.json';
import ruCommon from '../locales/ru/common.json';

const resources = {
  en: {
    common: enCommon,
  },
  ru: {
    common: ruCommon,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // Default language
    fallbackLng: 'ru',
    
    interpolation: {
      escapeValue: false,
    },
    
    ns: ['common'],
    defaultNS: 'common',
  });

export default i18n;