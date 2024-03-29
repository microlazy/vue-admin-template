import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from './utils/axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './components'
import './style/reset.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
