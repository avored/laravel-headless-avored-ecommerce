import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'
import AppLayout from './layouts/App.vue'


import './assets/tailwind.css'
import i18n from './i18n'


Vue.config.productionTip = false

Vue.component('app-layout', AppLayout)

new Vue({
  router,
  apolloProvider: createProvider(),
  i18n,
  render: h => h(App)
}).$mount('#app')
