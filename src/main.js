import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import './mock' // simulation data

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI)
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
