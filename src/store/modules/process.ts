import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { CpuState } from '@/interfaces/store/cpu'
import { CentralProcessingUnitInfo } from '@/interfaces/model/CentralProcessingUnti'
import { ProcessState } from '@/interfaces/store/process'
import { ProcessInfo } from '@/interfaces/model/process'
import si from 'systeminformation'

const state: ProcessState = {
  all: 0,
  running: 0,
  blocked: 0,
  sleeping: 0,
  unknown: 0,
  list: []
}

const getters = {
} as GetterTree<any, never>

const mutations = {
  SET_PROCESS_INFO (state: ProcessState, payload: ProcessInfo) {
    state = Object.assign(state, payload)
  },
} as MutationTree<any>

const actions = {
  async initProcessInfo ({ commit }) {
    const processes = await si.processes()
    commit('SET_PROCESS_INFO', processes)
  },
  setProcessInfo ({ commit }, payload: ProcessInfo) {
    commit('SET_CPU_INFO', payload)
  },
  async observeProcess ({ commit }) {
    const processes = await si.processes()
    commit('SET_PROCESS_INFO', processes)
  }
} as ActionTree<any, never>

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
