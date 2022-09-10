<template>
  <div id="app" class="app-layout is-relative animated fadeIn delay-1s">
    <app-sidebar/>
    <article class="app-content view-content is is-relative">
      <router-link v-if="is_home === 'false'" :to="{name: 'home'}" class="is-medium is-margin-centered is-block is-right is-fixed">View all Work</router-link>
      <transition @before-enter="beforeEnter" mode="out-in" name="router-anim" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
        <router-view/>
      </transition>
    </article>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Text:400,900&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
</style>

<script>
  import appSidebar from './components/AppSidebar.vue'
  export default {
    data () {
      return {
        is_home: ''
      }
    },
    watch: {
      $route (to) {
        document.title = to.meta.title || 'Portfolio by Kevin Bigelow';
        if (this.$route.name === "home") {
          this.is_home = 'true'
        } else {
          this.is_home = 'false'
        }
      },
      immediate: true
    },
    methods: {
      beforeEnter () {
        this.$root.$emit('scrollBeforeEnter');
      }
    },
    components: {
      appSidebar
    },
  }
</script>
