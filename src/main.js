// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jquery from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import { DateTime } from 'luxon'
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueAnalytics from 'vue-analytics'

window.$ = jquery
window.jQuery = jquery
window.DateTime = DateTime

Vue.use(VueResource)
Vue.use(VueAnalytics, {
  id: ' UA-61560031-3'
})

Vue.config.productionTip = false
Vue.http.options.root = 'https://edt.mathiasughetto.fr/api/week'

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (request.after) {
      request.after.call(this, response)
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
