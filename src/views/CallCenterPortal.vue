<template>
  <div class="specimen-page-content page-content">
    <article v-if="specimen">
      <h1 class="title is-size-2">{{specimen.name}}</h1>
      <h2 class="subtitle is-size-4 is-size-3-fullhd has-text-primary"><span v-for="cat in specimen.categories" :key="cat">{{cat}} </span></h2>
      <p class="is-family-sans-serif is-size-5-fullhd p-content" v-html="specimen.description"></p>
      <div class="well well-vertical-gradient mt-3">
        <img :src="getImgSrc(specimen.slug, specimen.featured_image.src)" class="is-full-width">
      </div>
    </article>
  </div>
</template>

<script>
  import fetchSpecimen from '../mixins/fetchSpecimen.js'

  export default {
    name: 'Specimen',
    mixins: [fetchSpecimen],
    props: ['slug'],
    methods: {
      getImgSrc(dir, src) {
          let image = dir + '/' + src;
          return require('../assets/' + image);
      }
    }
  }
</script>
