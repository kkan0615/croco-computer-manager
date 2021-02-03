import { ActionTree, GetterTree, MutationTree } from 'vuex'
import si from 'systeminformation'
// import { Gr } from '@/interfaces/model/graphic'

const state: any = {
}

const getters = {
} as GetterTree<any, never>

const mutations = {
} as MutationTree<any>

const actions = {
  async initCpuInfo ({ commit }) {
    console.log(await si.graphics())
  },
} as ActionTree<any, never>

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
