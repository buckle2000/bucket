// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'

Vue.config.productionTip = false

/**
 * TODO learn materialize css
 * http://materializecss.com/
 */
// require('materialize-css')
require('./main.styl')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
})