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
      path: '/CallCenterPortal',
      name: 'CallCenterPortal',
      component: () => import('./views/CallCenterPortal.vue')
    },
    {
      path: '/Fusion',
      name: 'Fusion',
      component: () => import('./views/Fusion.vue')
    },
    {
      path: '/WebDesignMarketingPamphlet',
      name: 'WebDesignMarketingPamphlet',
      component: () => import('./views/WebDesignMarketingPamphlet.vue')
    },
    {
      path: '/NeutronWingSticker',
      name: 'NeutronWingSticker',
      component: () => import('./views/NeutronWingSticker.vue')
    },
    {
      path: '/ProtonWatchlists',
      name: 'ProtonWatchlists',
      component: () => import('./views/ProtonWatchlists.vue')
    },
    {
      path: '/*',
      component: () => import('./views/404.vue')
    },
  ]
})
