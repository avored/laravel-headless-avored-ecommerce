import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'
import './assets/tailwind.css'

import AppLayout from "@/layouts/App.vue";
import LoginLayout from "@/layouts/Login.vue";

Vue.config.productionTip = false

Vue.component('app-layout', AppLayout);
Vue.component('login-layout', LoginLayout);


new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
