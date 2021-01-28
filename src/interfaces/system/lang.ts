export interface Dictionary {
  rule: {
    required: string
  }
  general: {
    authMenu: {
      profile: string
      setting: string
      logout: string
    }
    searchBar: {
      label: string
    }
    languageMenu: {
      language: string
      subTitle: string
    }
  }
  loadingTips: {
    tip1: string
    tip2: string
    tip3: string
    tip4: string
    tip5: string
  }
  snackbar: {
    close: string
  }
  components: {
    localeList: {
      language: string
    }
    topFilter: {
      search: string
    }
  }
  router: {
    GeneralLayout: {
      title: string
    }
    Playground: {
      title: string
    }
    Playground2: {
      title: string
    }
    About: {
      title: string
    }
    Example: {
      title: string
    }
    PostExample: {
      title: string
    }
    DevExample: {
      title: string
    }
    ListWithFormExample: {
      title: string
    }
    echartExample: {
      title: string
    }
  }
  login: {
    loginForm: {
      idInput: string
      passwordInput: string
      loginButton: string
      rememberId: string
    }
  }
  test: {
    hello: string
    request: string
  }
}
