import _Vue from 'vue'
import store from '@/store'
import { SnackbarOption } from '@/interfaces/snackbar'

export class SnackbarPlugin {
  public showSnackbar (snackbar: SnackbarOption) {
    console.log(snackbar)
    store.commit('alert/showSnackbar', snackbar)
  }
}

export function snackbarPlugin (Vue: typeof _Vue): void {
  Vue.prototype.$snackbar = new SnackbarPlugin()
}

export default snackbarPlugin
