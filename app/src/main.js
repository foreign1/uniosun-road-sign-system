/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/routes.js'
import { store } from './store/store'
import '@/assets/css/style.css'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_API_KEY,
    libraries: 'places'
  }
});

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
});