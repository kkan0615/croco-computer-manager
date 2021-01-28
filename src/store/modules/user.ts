import { AuthUser } from '@/interfaces/user'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import _ from 'lodash'

const state: AuthUser = {
  /* @TODO: USER 정책 새워질때 넣기 */
  // id: -1,
  // token: '',
  // image: '',
  // name: '',
  // nickname: ''
  id: 1,
  token: 'TEST_TOKEN',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSve1KURcIup7UuJVn0N1NbVv1bSDXLVKooXg&usqp=CAU',
  nickname: '테스트 어드민 닉네임',
  name: '테스트 어드민',
}

const getters = {
  user (state: AuthUser) {
    return state
  },
  userId (state: AuthUser) {
    return state.id
  }
} as GetterTree<AuthUser, never>

const mutations = {
  /**
   * Initialize state
   * @param state - application data
   */
  setUser (state: AuthUser, payload: AuthUser) {
    state = _.cloneDeep(payload)
  },

} as MutationTree<AuthUser>

const actions = {
  login ({ commit }, payload) {
    console.log(payload)
    commit('setUser', {
      id: 1,
      token: 'TEST_TOKEN',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSve1KURcIup7UuJVn0N1NbVv1bSDXLVKooXg&usqp=CAU',
      nickname: '테스트 어드민 닉네임',
      name: '테스트 어드민',
    } as AuthUser)

    return true
  },
  logout () {
    return true
  },
} as ActionTree<AuthUser, never>

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
