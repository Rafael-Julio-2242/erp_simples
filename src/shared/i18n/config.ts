import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import { LanguageDetector } from 'i18next-http-middleware';

i18next
 .use(Backend)
 .use(LanguageDetector)
 .init({
  fallbackLng: 'en',
  preload: ['pt-br', 'en'],
  ns: ['common', 'errors'],
  backend: {
   loadPath: './translations/{{lng}}/{{ns}}.json'
  }
 })

export default i18next;