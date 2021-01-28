import { KeyOfLocalStorage } from '@/interfaces/system/localStorage'
import { DEFAULT_THEME, ThemeName } from '@/interfaces/system/theme'

export const getCurrentTheme = (): ThemeName => {
  return localStorage.getItem('theme' as KeyOfLocalStorage) as ThemeName ||  DEFAULT_THEME
}

export const exCurrentTheme = () => {
  return !!(localStorage.getItem('theme' as KeyOfLocalStorage) as ThemeName)
}

export const setCurrentTheme = (theme: ThemeName) => {
  localStorage.setItem('theme' as KeyOfLocalStorage, theme)
}
export const getOppositeTheme = (): ThemeName => {
  return getCurrentTheme() === 'light' ? 'dark' : 'light'
}
