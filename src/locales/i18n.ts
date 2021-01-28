/**
 * Refs
 * 1. https://kazupon.github.io/vue-i18n/introduction.html
 */

import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'
import { getCurrentLocale } from '@/utils/locale'
import { DEFAULT_LOCALE } from '@/interfaces/system/locale'

Vue.use(VueI18n)

/**
 * load locale messages(dictionary of language)
 * @return LocaleMessages - Locale file (Ex: ko, en)
 */
const loadLocaleMessages = (): LocaleMessages => {
  const locales = require.context('./languages', true, /[A-Za-z0-9-_,\s]+\.ts$/i)
  const messages: LocaleMessages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })

  return messages
}

export default new VueI18n({
  locale: getCurrentLocale(), // current locale
  fallbackLocale: DEFAULT_LOCALE,
  messages: loadLocaleMessages()
})
