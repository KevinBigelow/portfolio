import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(
    faArrowLeft,
    faExternalLink,
    faFilePdf,
    faGithub,
    faLinkedin,
    faMedium
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueLazyload, {
  loading: '/images/loading.gif',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
