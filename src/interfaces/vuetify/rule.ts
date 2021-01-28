import VueI18n from 'vue-i18n'

/**
 * Vuetify input Rule에 사용되는 Type
 * */
export type VuetifyRule<T> = Record<keyof T | string, Array<(v: string) => boolean | string | VueI18n.TranslateResult>>

