<template>
  <div id="app" class="app-layout is-relative animated fadeIn delay-1s">
    <KinesisContainer class="app-navbar" tag="nav">
      <div class="app-navbar--heading">
        <h2 class="has-text-primary is-size-4 has-text-centered">UI Designer <span class="has-text-white has-font-family-secondary has-text-weight-bold ampersand-amplify">&</span> Developer</h2>
        <h1 class="title is-size-2 has-text-centered has-text-white">Kevin Bigelow</h1>
        <transition name="router-anim" enter-active-class="animated bounceIn delay-500ms" leave-active-class="animated bounceOut">
          <KinesisElement type="depth" :strength="6" v-if="is_home === 'false'">
            <router-link :to="{name: 'home'}" class="app-navbar--button button is-layered is-primary-gradient is-primary is-medium is-margin-centered is-block">View all Work</router-link>
          </KinesisElement>
        </transition>
      </div>
      <div class="app-navbar--footer has-text-centered">
        <span class="bizarro-text has-text-white">moc.liamg@ngised.wolegibnivek</span>
      </div>
    </KinesisContainer>
    <article class="app-content">
      <transition @before-enter="beforeEnter" mode="out-in" name="router-anim" enter-active-class="animated fadeIn faster delay-500ms" leave-active-class="animated fadeOut faster">
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
  import { KinesisContainer, KinesisElement } from 'vue-kinesis'

  export default {
    data() {
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
      KinesisContainer, KinesisElement
    },
  }
</script>
