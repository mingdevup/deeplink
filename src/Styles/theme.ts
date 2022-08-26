import {css, Global} from '@emotion/core';
import {Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const theme: GlobalStyles = {
  colors: {
    puerWhite: '#ffffff',
    pureBalck: '#000000',
  },

  dimensions: {
    screenWidth,
    screenHeight,
  },

  fonts: {
    notoBlack: 'NotoSans-Black',
    notoBold: 'NotoSansKR-Bold',
    notoLight: 'NotoSansKR-Light',
    notoMedium: 'NotoSansKR-Medium',
    notoRegular: 'NotoSansKR-Regular',
    notoThin: 'NotoSansKR-Thin',
  },

  fontSize: {
    mini: 14,
    nomal: 17,
    big: 25,
    super: 35,
  },
};

export {theme};
