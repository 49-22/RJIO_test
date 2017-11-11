import Vue from 'vue'
import Router from 'vue-router'
import AllArticles from '@/components/AllArticles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllArticles',
      component: AllArticles
    }
  ]
})
