<template>
  <div id="app" class="app-layout is-relative animated fadeIn delay-1s">
    <app-sidebar/>
    <article class="app-content view-content is-relative">
      <transition name="router-anim" enter-active-class="animated bounceInDown delay-1s" leave-active-class="animated bounceOutUp">
        <return-home v-if="is_home === 'false'"/>
      </transition>
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
  import returnHome from './components/ReturnHome.vue'

  export default {
    data () {
      return {
        is_home: ''
      }
    },
    methods: {
      beforeEnter () {
        this.$root.$emit('scrollBeforeEnter');
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
    components: {
      appSidebar, returnHome
    },
  }
</script>
