<template>
  <div id="app" class="app-layout is-relative animated fadeIn delay-1s">
    <app-sidebar/>
    <article class="app-content view-content is-relative">
      <app-topbar/>
      <transition @before-enter="beforeEnter" mode="out-in" name="router-anim" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
        <router-view/>
      </transition>
      <ArticleLinkouts class="is-col-span-2"/>
    </article>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Text:400,900&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
</style>

<script>
  import appSidebar from './components/AppSidebar.vue'
  import appTopbar from './components/AppTopbar.vue'
  import ArticleLinkouts from './components/ArticleLinkouts'

  export default {
    methods: {
      beforeEnter () {
        this.$root.$emit('scrollBeforeEnter');
      }
    },
    components: {
      appSidebar, appTopbar, ArticleLinkouts
    },
  }
</script>
