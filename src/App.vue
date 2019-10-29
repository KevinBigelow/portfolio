<template>
  <div id="app" class="app-layout">
    <nav class="app-navbar">
      <div class="app-navbar--heading">
        <h2 class="has-text-primary is-size-3 has-text-centered">UI Designer & Developer</h2>
        <h1 class="title is-size-1 has-text-centered">Kevin Bigelow</h1>
        <router-link :to="{name: 'home'}" class="button is-primary is-large is-margin-centered is-block">View all Work</router-link>
      </div>
      <div class="app-navbar--footer">
        <span>kevinbigelow.design@gmail.com</span>
      </div>
    </nav>
    <article class="app-content">
      <router-view/>
    </article>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Text:400,900&display=swap');
  @import "/styles/main.scss";
</style>
