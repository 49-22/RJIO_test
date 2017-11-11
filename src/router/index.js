import Vue from 'vue'
import Router from 'vue-router'
import AllArticles from '@/components/AllArticles'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllArticles',
      component: AllArticles
    }, {
      path: '/about/:id',
      name: 'About',
      component: About
    }
  ]
})
