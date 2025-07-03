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
    lng: 'en', // This will be overridden by the LanguageProvider
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false,
    },
    
    ns: ['common'],
    defaultNS: 'common',
    
    // Enable server-side rendering support
    react: {
      useSuspense: false, // Disable suspense for SSR
    },
    
    // Ensure immediate language switching
    load: 'languageOnly',
    cleanCode: true,
    debug: false,
  });

export default i18n;