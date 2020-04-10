// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jquery from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import { DateTime } from 'luxon'
import Vue from 'vue'
import App from './App'

window.$ = jquery
window.jQuery = jquery
window.DateTime = DateTime

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
