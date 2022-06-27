import { Language } from '../app/core/enums/language.enum';
export const environment = {
  production: true,
  locales: [Language.ENGLISH, Language.RUSSIAN],
  defaultLocale: Language.ENGLISH,
  host: 'https://innowise-cv-generator.herokuapp.com',
};
