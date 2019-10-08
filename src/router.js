import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:specimen_id',
      name: 'specimen',
      component: () => import('./views/Specimen.vue')
    },
    {
      path: '/*',
      component: () => import('./views/404.vue')
    },
  ]
})
