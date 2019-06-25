import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index/HelloWorld'
import detail from '@/components/index/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index/detail',
      name: 'detail',
      component: detail
    }
  ]
})
