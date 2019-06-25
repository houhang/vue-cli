// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from '../static/js/rem'
import mock from './mock'
import {put,post,patch,fetch} from './api'

Vue.prototype.$put=put;
Vue.prototype.$post=post;
Vue.prototype.$patch=patch;
Vue.prototype.$fetch=fetch;

require("./mock.js")
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  rem,
  mock,
  components: { App },
  template: '<App/>'
})
