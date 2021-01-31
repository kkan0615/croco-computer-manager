module.exports = {
  transpileDependencies: [
    'vuetify',
  ],

  pluginOptions: {
    i18n: {
      locale: 'ko',
      fallbackLocale: 'ko',
      localeDir: 'locales',
      enableInSFC: true
    },
    electronBuilder: {
      nodeIntegration: true,
      requestedExecutionLevel: 'requireAdministrator',
      win: {
        requestedExecutionLevel: 'requireAdministrator'
      },
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        win: {
          requestedExecutionLevel: 'requireAdministrator'
        }
      }
    }
  }
}
