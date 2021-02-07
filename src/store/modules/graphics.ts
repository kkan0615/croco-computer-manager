import { ActionTree, GetterTree, MutationTree } from 'vuex'
import si from 'systeminformation'
import { GraphicActionType, GraphicMutationType, GraphicState } from '@/interfaces/store/graphic'

const state: GraphicState = {
  controllers: [],
  displays: []
}

const getters = {
} as GetterTree<GraphicState, never>

const mutations = {
  [GraphicMutationType.SET_GRAPHIC] (state: GraphicState, payload: GraphicState) {
    state = Object.assign(state, payload)
  }
} as MutationTree<GraphicState>

const actions = {
  async [GraphicActionType.INIT_GRAPHIC_INFO] ({ commit }) {
    const graphicInfo = await si.graphics()
    commit(GraphicMutationType.SET_GRAPHIC, graphicInfo)
  },
  async [GraphicActionType.OBSERVE_GRAPHIC_INFO] ({ commit }) {
    const graphicInfo = await si.graphics()
    commit(GraphicMutationType.SET_GRAPHIC, graphicInfo)
  },
} as ActionTree<GraphicState, never>

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
