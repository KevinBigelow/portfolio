<template>
  <div id="app" class="app-layout is-relative">
    <nav class="app-navbar">
      <div class="app-navbar--heading">
        <h2 class="has-text-primary is-size-4 has-text-centered">UI Designer <span class="has-text-white has-font-family-secondary has-text-weight-bold ampersand-amplify">&</span> Developer</h2>
        <h1 class="title is-size-2 has-text-centered has-text-white">Kevin Bigelow</h1>
        <router-link v-if="is_home === 'false'" :to="{name: 'home'}" class="app-navbar--button button is-layered is-primary-gradient is-primary is-medium is-margin-centered is-block">View all Work</router-link>
      </div>
      <div class="app-navbar--footer has-text-centered">
        <span class="bizarro-text">moc.liamg@ngised.wolegibnivek</span>
      </div>
    </nav>
    <article class="app-content">
      <router-view/>
    </article>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Text:400,900&display=swap');
</style>

<script>
  export default {
    data() {
      return {
        is_home: 'true'
      }
    },
    watch: {
      $route: function() {
        if (this.$route.name === "home") {
          this.is_home = 'true'
        } else {
          this.is_home = 'false'
        }
      }
    }
  }
</script>
