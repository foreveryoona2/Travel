import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'
// 同步组件加载形式

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
      // 异步组件加载形式
    }, {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    }, {
      path: '/detail/:id',//动态路由，前面必须为detail/，带一个参数，放到id的变量里面
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0}
  }
})