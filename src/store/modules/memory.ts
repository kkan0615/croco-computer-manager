import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { MemoryState } from '@/interfaces/store/memory'
import { RamMemory, MemoryLayout } from '@/interfaces/model/ramMemory'
import si from 'systeminformation'

const state: MemoryState = {
  total: 0,
  free: 0,
  freePercentage: 0,
  used: 0,
  usedPercentage: 0,
  active: 0,
  available: 0,
  buffers: 0,
  cached: 0,
  slab: 0,
  buffcache: 0,
  swaptotal: 0,
  swapused: 0,
  swapfree: 0,
  layouts: []
}

const getters = {
} as GetterTree<MemoryState, never>

const mutations = {
  SET_MEMORY (state: MemoryState, payload: RamMemory) {
    state.freePercentage = parseFloat((payload.free / payload.total * 100).toFixed(2))
    state.usedPercentage = parseFloat((payload.used / payload.total * 100).toFixed(2))
    state = Object.assign(state, payload)
  },
  SET_MEMORY_LAYOUT (state: MemoryState, payload: RamMemory) {
    state.layouts = Object.assign(state.layouts, payload)
  }
} as MutationTree<MemoryState>

const actions = {
  async initMemoryInfo ({ commit }) {
    const memory = await si.mem()
    const layouts = await si.memLayout()
    commit('SET_MEMORY', {
      ...memory,
      layouts,
    } as MemoryState)
  },
  async observeMemory ({ commit }) {
    const memory = await si.mem()
    commit('SET_MEMORY', memory)
  }
} as ActionTree<MemoryState, never>

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
