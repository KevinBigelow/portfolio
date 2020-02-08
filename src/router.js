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
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/call-center-portal',
      name: 'CallCenterPortal',
      component: () => import('./views/CallCenterPortal.vue'),
      meta: {
        title: 'Call Center Portal'
      }
    },
    {
      path: '/fusion',
      name: 'Fusion',
      component: () => import('./views/Fusion.vue'),
      meta: {
        title: 'Fusion Web App UI'
      }
    },
    {
      path: '/web-design-marketing-pamphlet',
      name: 'WebDesignMarketingPamphlet',
      component: () => import('./views/WebDesignMarketingPamphlet.vue'),
      meta: {
        title: 'Web Design Marketing Pamphlet'
      }
    },
    {
      path: '/neutron-wing-sticker',
      name: 'NeutronWingSticker',
      component: () => import('./views/NeutronWingSticker.vue'),
      meta: {
        title: 'Neutron Wing Sticker'
      }
    },
    {
      path: '/proton-watchlists',
      name: 'ProtonWatchlists',
      component: () => import('./views/ProtonWatchlists.vue'),
      meta: {
        title: 'Proton Watchlists'
      }
    },
    {
      path: '/*',
      component: () => import('./views/404.vue'),
      meta: {
        title: '404 - Uh Oh'
      }
    },
  ]
})
