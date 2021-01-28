import { Dictionary } from '@/interfaces/system/lang.ts'

export const dictionary: Dictionary = {
  rule: {
    required: '{target} is required'
  },
  general: {
    authMenu: {
      profile: 'Profile',
      setting: 'Setting',
      logout: 'Logout'
    },
    searchBar: {
      label: 'Press (CTRL + /) to search'
    },
    languageMenu: {
      language: 'Language',
      subTitle: 'Choose the language'
    },
  },
  loadingTips: {
    tip1: 'Press the earth icon to change language! ',
    tip2: 'You can change to dark mode to prevent eye at night!',
    tip3: 'Exercise help you to get health life!',
    tip4: 'Roll your eyes for your eye health!',
    tip5: 'Tip is generated randomly!'
  },
  snackbar: {
    close: 'close'
  },
  components: {
    localeList: {
      language: 'Language',
    },
    topFilter: {
      search: 'search'
    }
  },
  router:{
    GeneralLayout:{
      title: 'GeneralLayout(To be deleted)'
    },
    Playground:{
      title: '2 divisions'
    },
    Playground2:{
      title: '3 divisions'
    },
    About:{
      title: 'About'
    },
    Example: {
      title: 'Example'
    },
    PostExample: {
      title: 'PostExample'
    },
    DevExample:{
      title: 'DevExample'
    },
    ListWithFormExample: {
      title: 'List with Form'
    },
    echartExample: {
      title: ' Echart example'
    }
  },
  login: {
    loginForm: {
      idInput: 'ID',
      passwordInput: 'Password',
      loginButton: 'Login',
      rememberId: 'Remember id'
    }
  },
  test: {
    hello: 'Hello i18n World!!!!!',
    request: 'request',
  }
}

export default dictionary
