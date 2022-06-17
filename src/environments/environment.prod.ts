import { Languages } from '../app/core/enums/languages.enum';
export const environment = {
  production: true,
  locales: [Languages.ENGLISH, Languages.RUSSIAN],
  defaultLocale: Languages.ENGLISH,
};
