<template>
  <div id="app" class="app-layout">
    <nav class="app-navbar">
      <div class="align-self--start">
        <h2 class="has-text-primary is-size-3 has-text-centered">UI Designer & Developer</h2>
        <h1 class="title is-size-1 has-text-centered">Kevin Bigelow</h1>
      </div>
      <div class="align-self--end">
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
