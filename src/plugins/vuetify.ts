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
        mesBackground: colors.grey.lighten3,
        mesPrimary: '#2d99f2',
        mesSecondary: colors.indigo.darken4,
        mesAccent: colors.orange.darken1,
      },
      dark: {
        primary: '#2196F3',
        secondary: '#1f2940',
        accent: colors.blue.darken3,
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#1a2035',
        mesBackground: colors.grey.lighten3,
        mesPrimary: '#2d99f2',
        mesSecondary: colors.indigo.darken4,
        mesAccent: colors.orange.darken1,
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
