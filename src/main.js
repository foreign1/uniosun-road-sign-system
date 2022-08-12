/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/routes.js'
import { store } from './store/store'
import '@/assets/css/style.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export const eventBus = new Vue({
  data () {
    return {
    greeting: 'Hello World!' ,
    food: "eba"
    }
  }
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
});