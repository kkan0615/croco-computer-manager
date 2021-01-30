import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { CpuState } from '@/interfaces/store/cpu'
import {
  CentralProcessingUnitLoad,
  CentralProcessingUnit,
  CentralProcessingUnitCache, CentralProcessingUnitInfo, CentralProcessingUnitSpeedDetail,
  CentralProcessingUnitTemperature
} from '@/interfaces/model/CentralProcessingUnti'
import si from 'systeminformation'

const state: CpuState = {
  manufacturer: '',
  brand: '',
  vendor: '',
  family: '',
  model: '',
  stepping: '',
  revision: '',
  voltage: '',
  speed: 0,
  speedMin: 0,
  speedMax: 0,
  governor: '',
  cores: 0,
  physicalCores: 0,
  processors: 0,
  socket: '',
  flags: '',
  virtualization: false,
  cache: {} as CentralProcessingUnitCache,
  temperature: {} as  CentralProcessingUnitTemperature,
  speedDetail: {} as CentralProcessingUnitSpeedDetail,
  load: {} as CentralProcessingUnitLoad,
  histories: 0
}

const getters = {
} as GetterTree<CpuState, never>

const mutations = {
  SET_CPU_INFO (state: CpuState, payload: CentralProcessingUnitInfo) {
    state = Object.assign(state, payload)
  },
  SET_CPU (state: CpuState, payload: CentralProcessingUnit) {
    state = Object.assign(state, payload)
  },
  SET_CPU_SPEED_DETAIL (state: CpuState, payload: CentralProcessingUnitSpeedDetail) {
    /* Reset speed info not in speedDetail */
    state.speed = payload.avg
    state.speedMax = payload.max
    state.speedMin = payload.min
    state = Object.assign(state, {
      speed: payload.avg,
      speedMax: payload.max,
      speedMin: payload.min,
    } as CpuState)
    state.speedDetail = Object.assign(state.speedDetail, payload)
  },
  SET_CPU_TEMPERATURE (state: CpuState, payload: CentralProcessingUnitTemperature) {
    state.temperature = Object.assign(state.temperature, payload)
  },
  SET_CPU_CACHE (state: CpuState, payload: CentralProcessingUnitCache) {
    state.cache = Object.assign(state.cache, payload)
  },
  SET_CPU_LOAD (state: CpuState, payload: CentralProcessingUnitLoad) {
    state.load = Object.assign(state.load, payload)
  },
} as MutationTree<CpuState>

const actions = {
  async initCpuInfo ({ commit }) {
    const cpu = await si.cpu()
    // console.log(si.cpuCurrentspeed())
    // @TODO: Systeminfomation에 버그가 존재함, 이름이 틀림
    const speedDetail = await (si as any).cpuCurrentSpeed()
    const temperature = await si.cpuTemperature()
    const cachedCpu = await si.cpuCache()
    const load = await si.currentLoad()
    const fullLoad = await si.fullLoad()

    console.log(load)
    console.log(fullLoad)

    commit('SET_CPU_INFO', {
      ...cpu,
      speedDetail,
      temperature,
      cache: cachedCpu,
      load: {
        ...load,
        fullLoad
      }
    } as CentralProcessingUnitInfo)
  },
  setCpuInfo ({ commit }, payload: CentralProcessingUnitInfo) {
    commit('SET_CPU_INFO', payload)
  },
  setCpu ({ commit }, payload: CentralProcessingUnit) {
    commit('SET_CPU', payload)
  },
  setCpuSpeedDetail ({ commit }, payload: CentralProcessingUnitSpeedDetail) {
    commit('SET_CPU_SPEED_DETAIL', payload)
  },
  setCpuTemperature ({ commit }, payload: CentralProcessingUnitTemperature) {
    commit('SET_CPU_TEMPERATURE', payload)
  },
  setCpuCache ({ commit }, payload: CentralProcessingUnitCache) {
    commit('SET_CPU_CACHE', payload)
  },
  setCpuLoad ({ commit }, payload: CentralProcessingUnitLoad) {
    commit('SET_CPU_CACHE', payload)
  },
  async observeCpu ({ commit }) {
    const speedDetail = await (si as any).cpuCurrentSpeed()
    commit('SET_CPU_SPEED_DETAIL', speedDetail)
    const temperature = await si.cpuTemperature()
    commit('SET_CPU_TEMPERATURE', temperature)
    const load = await si.currentLoad()
    const fullLoad = await si.fullLoad()
    commit('SET_CPU_LOAD', {
      ...load,
      fullLoad
    })

    console.log('changing...')
  }
} as ActionTree<CpuState, never>

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
