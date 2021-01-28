import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './locales/i18n'
/* Moment 설정 파일  */
import '@/utils/moment'
/* index 설정파일 */
import '@/styles/index.scss'
/* Vuetify 설정 파일 */
import '@/styles/vuetify.scss'
/* Directive 설정 파일 */
import '@/directives'
/* Utils prototype */
import '@/utils/array'
/* Plguin 관련 import */
import loadingPlugin, { LoadingPlugin } from '@/plugins/loading'
import snackbarPlugin, { SnackbarPlugin } from '@/plugins/snackbar'
import confirmDialogPlugin, { confirm } from '@/plugins/confirmDialog'
/* Devextreme css 파일*/
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.softblue.compact.css'

/* 스타일 파일을 switch 하면 theme 변경 가능 */
import 'devextreme/dist/css/dx.light.css'
//import 'devextreme/dist/css/dx.carmine.css'
//import 'devextreme/dist/css/dx.dark.css'

Vue.config.productionTip = false

/* Plugin 추가 */
Vue.use(loadingPlugin)
Vue.use(snackbarPlugin)
Vue.use(confirmDialogPlugin)

declare module 'vue/types/vue' {

  interface Vue {
    $loading: LoadingPlugin
    $snackbar: SnackbarPlugin
    $confirm: typeof confirm
  }
}

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
