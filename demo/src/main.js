// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { VueSimpleSlideBarPlugin } from '../../dist/vue-simple-slide-bar.umd'
import '../../dist/vue-simple-slide-bar.umd.css'

Vue.config.productionTip = false
Vue.use(VueSimpleSlideBarPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
