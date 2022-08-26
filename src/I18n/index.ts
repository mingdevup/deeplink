import {initReactI18next} from 'react-i18next';
import i18next from 'i18next';
import * as resources from '@I18n/locales';
import {getLocales} from 'react-native-localize';

i18next.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  // lng: 'ko',
  fallbackLng: 'ko',
  debug: __DEV__ ? false : false,
  resources: resources.default,
  ns: ['common'],
  defaultNS: 'common',
});

export const I18n = i18next;
