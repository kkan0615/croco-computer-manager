import { Application } from '@/interfaces/application'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import vuetify from '@/plugins/vuetify'

const state: Application = {
  appBar: true,
  drawer: true,
  loading: false,
  miniVariant: true,
}

const getters = {
  isOpenAppBar (state: Application) {
    return state.appBar
  },
  isOpenDrawer (state: Application) {
    return state.drawer
  },
  isOpenLoading (state: Application) {
    return state.loading
  },
  isMiniVariant (state: Application) {
    if (!state.miniVariant || vuetify.framework.breakpoint.smAndDown) return false
    return state.drawer
  }
} as GetterTree<Application, never>

const mutations = {
  /**
   * Initialize state
   * @param state - application data
   */
  init (state: Application) {
    state.appBar = true
    state.drawer = true
  },
  /**
   * Set the app bar status to payload
   * @param state - application data
   * @param payload - status of app-bar
   */
  setAppbar (state: Application, payload: boolean) {
    state.appBar = payload
  },
  /**
   * Set the drawer status to payload
   * @param state - application data
   * @param payload - status of drawer
   */
  setDrawer (state: Application, payload: boolean) {
    state.drawer = payload
  },
  /**
   * Set the loading status to payload
   * @param state - application data
   * @param payload - status of loading
   */
  setLoading (state: Application, payload: boolean) {
    state.loading = payload
  },
} as MutationTree<Application>

const actions = {
  openAppbar ({ commit }) {
    commit('setAppbar', true)
  },
  closeAppbar ({ commit }) {
    commit('setAppbar', false)
  },
  openDrawer ({ commit }) {
    commit('setDrawer', true)
  },
  closeDrawer ({ commit }) {
    commit('setDrawer', false)
  },
  openLoading ({ commit }) {
    commit('setLoading', true)
  },
  closeLoading ({ commit }) {
    commit('setLoading', false)
  },
} as ActionTree<Application, never>

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
