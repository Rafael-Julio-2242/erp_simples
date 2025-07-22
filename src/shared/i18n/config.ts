import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import { LanguageDetector } from 'i18next-http-middleware';

import path from 'path';

i18next
 .use(Backend)
 .use(LanguageDetector)
 .init({
  fallbackLng: 'en',
  preload: ['pt-br', 'en'],
  ns: ['common', 'errors'],
  defaultNS: 'errors',
  backend: {
   loadPath: path.join(__dirname, '/translations/{{lng}}/{{ns}}.json')
  },
  interpolation: {
   escapeValue: false // not needed for react as it escapes by default
  }
 })

export default i18next;