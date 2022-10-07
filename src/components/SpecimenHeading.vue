<template>
  <div v-if="specimen" class="mb-6">
    <h1 class="title is-size-2">{{specimen.name}}</h1>
    <h2 class="subtitle is-size-4 is-size-3-fullhd has-text-primary mb-2"><span v-for="(cat, index) in specimen.categories" :key="cat">{{cat}}<span v-if="index !== specimen.categories.length - 1">, </span></span></h2>
  </div>
</template>

<script>
  export default {
    props: {
      specimen: {
        type: Object,
        required: true
      }
    }
  }
</script>
