<template>
  <div id="app" class="app-layout">
    <nav class="navbar-side">
      <h2 class="has-text-primary is-size-3 has-text-centered">Designer & Developer</h2>
      <h1 class="title is-size-1 has-text-centered">Kevin Bigelow</h1>
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
