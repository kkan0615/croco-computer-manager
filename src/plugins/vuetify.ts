import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ko from 'vuetify/src/locale/ko'
import en from 'vuetify/src/locale/en'
import colors from 'vuetify/lib/util/colors'
import { getCurrentLocale } from '@/utils/locale'
import { getCurrentTheme } from '@/utils/theme'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: getCurrentTheme() === 'dark',
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: colors.blue.darken3,
        secondary: '#FFF',
        accent: colors.purple.darken3,
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#F2F2F2',
      },
      dark: {
        primary: '#F5D10D',
        secondary: '#181818',
        accent: 'F6E71D',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#020202',
      },
    }
  },
  lang: {
    locales: { ko, en },
    current: getCurrentLocale()
  },
  defaultAssets: false,
  icons: {
    iconfont: 'md'
  }
})
