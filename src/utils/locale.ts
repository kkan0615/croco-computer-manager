import { KeyOfLocalStorage } from '@/interfaces/system/localStorage'
import { DEFAULT_LOCALE } from '@/interfaces/system/locale'

/**
 * Get current locale, if there is no saved locale in localStorage, return setting of user computer
 * @return current language - Ex) ko, en
 */
export const getCurrentLocale = () => {
  /* Reason using split: navigator.language return something like en-US or ko-KR */
  return localStorage.getItem('locale' as KeyOfLocalStorage) || navigator.language.split('-')[0] || DEFAULT_LOCALE
}

/**
 * Set the locale to local storage
 * @param locale - selected locale
 */
export const setCurrentLocale = (locale: string) => {
  if (!locale) locale = navigator.language
  localStorage.setItem('locale' as KeyOfLocalStorage, locale)
}

/**
 * Get current full locale (en-US, ko-KR), if there is no saved locale in localStorage, return setting of user computer
 * @return current Local - Ex) ko-KR, en-US
 */
export const getCurrentFullLocale = () => {
  return localStorage.getItem('locale' as KeyOfLocalStorage) || navigator.language || DEFAULT_LOCALE
}
