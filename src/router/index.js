import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: resolve => require(['../components/index/index'], resolve)
    },
    {
      path: '/appChild',
      component: resolve => require(['../components/appChild/appChild'], resolve)
    },
    {
      path: '/consultation',
      component: resolve => require(['../components/consultation/consultation'], resolve)
    },
    {
      path: '/news',
      component: resolve => require(['../components/news/news'], resolve),
      redirect: '/news/contents',
      children: [
        {
          path: 'contents',
          component: resolve => require(['../components/news/contents/contents'], resolve)
        },
        {
          path: 'details',
          component: resolve => require(['../components/news/contents/details'], resolve)
        }
      ]
    },
    {
      path: '/morethan',
      component: resolve => require(['../components/morethan/morethan'], resolve),
      children: [
        {
          path: 'briefIntrod',
          query: {
            id: 0
          },
          component: resolve => require(['../components/morethan/briefIntrod/briefIntrod'], resolve)
        },
        {
          path: 'concatUs',
          query: {
            id: 2
          },
          component: resolve => require(['../components/morethan/concatUs/concatUs'], resolve)
        }
      ]
    },
    {
      path: '/problem',
      component: resolve => require(['../components/problem/problem'], resolve),
      redirect: '/problem/self',
      children: [
        {
          path: 'self',
          query: {
            id: 'self'
          },
          component: resolve => require(['../components/problem/self/self'], resolve)
        }
      ]
    },
    {
      path: '/banner/bracelect5',
      component: resolve => require(['../components/swiper/banner/bracelect5'], resolve)
    },
    {
      path: '/banner/m9',
      component: resolve => require(['../components/swiper/banner/m9'], resolve)
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  // 对于所有路由导航，简单地让页面滚动到顶部。
  // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
