<template>
  <div v-if="specimen">
    <h1 class="title is-size-2">{{specimen.name}}</h1>
    <h2 class="subtitle is-size-4 is-size-3-fullhd has-text-primary"><span v-for="cat in specimen.categories" :key="cat">{{cat}} </span></h2>
    <p class="is-family-sans-serif is-size-5-fullhd p-content" v-html="specimen.description"></p>
  </div>
</template>

<script>
  export default {
    props: {
      specimen: {}
    }
  }
</script>
