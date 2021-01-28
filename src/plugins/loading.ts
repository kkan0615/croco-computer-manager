import _Vue from 'vue'
import store from '@/store'

export class LoadingPlugin {
  public async openLoading () {
    await store.dispatch('application/openLoading')
  }

  public async closeLoading () {
    await store.dispatch('application/closeLoading')

  }

  public async setLoading (visible: boolean) {
    if (visible) await this.openLoading()
    else await this.closeLoading()

  }
}

export function loadingPlugin (Vue: typeof _Vue): void {
  Vue.prototype.$loading = new LoadingPlugin()
}

export default loadingPlugin
