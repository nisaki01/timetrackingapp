import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import {routes} from './router/routes'
import {store} from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter ({
  store,
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
