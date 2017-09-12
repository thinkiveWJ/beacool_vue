import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import appChild from '@/components/appChild/appChild'
import consultation from '@/components/consultation/consultation'
import news from '@/components/news/news'
import newsContents from '@/components/news/contents/contents'
import newsDetails from '@/components/news/contents/details'
import morethan from '@/components/morethan/morethan'
import morethanBriefIntrod from '@/components/morethan/briefIntrod/briefIntrod'
import morethanConcatUs from '@/components/morethan/concatUs/concatUs'
import problem from '@/components/problem/problem'
import problemSelf from '@/components/problem/self/self'
import bracelect5 from '@/components/swiper/banner/bracelect5'
import m9 from '@/components/swiper/banner/m9'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/appChild',
      component: appChild
    },
    {
      path: '/consultation',
      component: consultation
    },
    {
      path: '/news',
      component: news,
      redirect: '/news/contents',
      children: [
        {
          path: 'contents',
          component: newsContents
        },
        {
          path: 'details',
          component: newsDetails
        }
      ]
    },
    {
      path: '/morethan',
      component: morethan,
      children: [
        {
          path: 'briefIntrod',
          query: {
            id: 0
          },
          component: morethanBriefIntrod
        },
        {
          path: 'concatUs',
          query: {
            id: 2
          },
          component: morethanConcatUs
        }
      ]
    },
    {
      path: '/problem',
      component: problem,
      redirect: '/problem/self',
      children: [
        {
          path: 'self',
          query: {
            id: 'self'
          },
          component: problemSelf
        }
      ]
    },
    {
      path: '/banner/bracelect5',
      component: bracelect5
    },
    {
      path: '/banner/m9',
      component: m9
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
