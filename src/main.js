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
// 取消 Vue 所有的日志与警告。默认false
// Vue.config.silent = true
// 设置为 false 以阻止 vue 在启动时生成生产提示。默认true
// Vue.config.productionTip = false
// 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。
// Vue.config.devtools = false
/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: {
    App
  },
  router
}).$mount('#app')
