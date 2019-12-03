import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/:slug',
      name: 'CallCenterPortal',
      component: () => import('./views/CallCenterPortal.vue')
    },
    {
      path: '/:slug',
      name: 'Fusion',
      component: () => import('./views/Fusion.vue')
    },
    {
      path: '/:slug',
      name: 'NeutronColdPitchPamphlet',
      component: () => import('./views/NeutronColdPitchPamphlet.vue')
    },
    {
      path: '/:slug',
      name: 'NeutronWingSticker',
      component: () => import('./views/NeutronWingSticker.vue')
    },
    {
      path: '/:slug',
      name: 'ProtonWatchlists',
      component: () => import('./views/ProtonWatchlists.vue')
    },
    {
      path: '/*',
      component: () => import('./views/404.vue')
    },
  ]
})
