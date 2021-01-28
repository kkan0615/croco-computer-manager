import _Vue from 'vue'
import { ConfirmOption } from '@/interfaces/system/confirm'
import vuetify from '@/plugins/vuetify'
import ConfirmDialogCompo from '@/components/ConfirmDialog/index.vue'

export const confirm = (message: string, option = {} as ConfirmOption) => {
  return new Promise((resolve => {
    const data = {
      content: message,
      ...option,
      status: false
    }

    const ComponentClass = _Vue.extend(ConfirmDialogCompo)
    const instance = new ComponentClass({
      data,
      vuetify,
      destroyed: () => {
        resolve(data.status)
      },
    })

    instance.$mount()
  }))
}

export function confirmDialogPlugin (Vue: typeof _Vue): void {
  Vue.prototype.$confirm = confirm
}

export default confirmDialogPlugin
