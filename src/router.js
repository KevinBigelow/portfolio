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
      path: '/call-center-portal',
      name: 'CallCenterPortal',
      component: () => import('./views/CallCenterPortal.vue')
    },
    {
      path: '/fusion',
      name: 'Fusion',
      component: () => import('./views/Fusion.vue')
    },
    {
      path: '/web-design-marketing-pamphlet',
      name: 'WebDesignMarketingPamphlet',
      component: () => import('./views/WebDesignMarketingPamphlet.vue')
    },
    {
      path: '/neutron-wing-sticker',
      name: 'NeutronWingSticker',
      component: () => import('./views/NeutronWingSticker.vue')
    },
    {
      path: '/proton-watchlists',
      name: 'ProtonWatchlists',
      component: () => import('./views/ProtonWatchlists.vue')
    },
    {
      path: '/*',
      component: () => import('./views/404.vue')
    },
  ]
})
