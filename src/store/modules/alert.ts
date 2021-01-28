import { AlertState } from '@/interfaces/alert'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { DEFAULT_SNACKBAR_TIMEOUT, SnackbarOption } from '@/interfaces/snackbar'
import { NotificationOption } from '@/interfaces/system/notification'

const state: AlertState = {
  snackbar: {} as SnackbarOption,
  notifications: [
    {
      id: 1,
      type: 'success',
      message: 'Test 01'
    },
    {
      id: 2,
      type: 'success',
      message: 'Test 02'
    },
    {
      id: 3,
      type: 'success',
      message: 'Test 03'
    },
    {
      id: 4,
      type: 'success',
      message: 'Test 04'
    },
    {
      id: 5,
      type: 'success',
      message: 'Test 05'
    },
    {
      id: 6,
      type: 'success',
      message: 'Test 06'
    }, {
      id: 7,
      type: 'success',
      message: 'Test 07'
    },
    {
      id: 8,
      type: 'success',
      message: 'Test 08'
    },
    {
      id: 9,
      type: 'success',
      message: 'Test 09'
    }
    , {
      id: 10,
      type: 'success',
      message: 'Test 10'
    }
  ]
}

const getters = {
} as GetterTree<AlertState, never>

const mutations = {
  showSnackbar (state: AlertState, payload: SnackbarOption) {
    payload.timeout = payload.timeout && payload.timeout > 0 ? payload.timeout : DEFAULT_SNACKBAR_TIMEOUT
    state.snackbar = payload
  },
  addNotification (state: AlertState, payload: NotificationOption) {
    if (state.notifications.length > 20) state.notifications.unshift()
    state.notifications.push(payload)
  },
  removeNotification (state: AlertState, payload: NotificationOption) {
    state.notifications.removeOne(payload)
  }

} as MutationTree<AlertState>

const actions = {
  addNotification ({ commit }, payload: NotificationOption) {
    commit('addNotification', payload)
  },
  removeNotification ({ commit }, payload: NotificationOption) {
    commit('removeNotification', payload)
  },
} as ActionTree<AlertState, never>

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
