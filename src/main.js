import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFilePdf, faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons'

import ArticleLinkouts from './components/ArticleLinkouts'
import HeadingTag from "./components/HeadingTag";
import ParagraphTag from "./components/ParagraphTag";
import ListItem from "./components/ListItem"

library.add(
    faArrowLeft,
    faExternalLink,
    faFileLines,
    faFilePdf,
    faGithub,
    faLinkedin,
    faMedium
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('article-linkouts', ArticleLinkouts)
Vue.component('heading-tag', HeadingTag)
Vue.component('paragraph-tag', ParagraphTag)
Vue.component('list-item', ListItem)

Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
