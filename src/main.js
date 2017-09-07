// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: {
    App
  },
  router,
  created () {
    console.log(this)
    window.scrollTo(0, 0)
  },
  watch: {
    'route' () {
      window.scrollTo(0, 0)
    }
  }
}).$mount('#app')
