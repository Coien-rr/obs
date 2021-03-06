import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import VueAxios from "vue-axios";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
