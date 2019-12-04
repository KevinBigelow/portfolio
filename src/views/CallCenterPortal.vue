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
  import axios from 'axios'
  export default {
    name: 'Specimen',
    data() {
      return {
        baseUrl: process.env.VUE_APP_BASE_URL,
        portfolio: null,
        specimen: null
      }
    },
    props: ['slug'],
    methods: {
      fetchData() {
        axios.get(this.baseUrl + 'portfolio.json').then(response => {
          this.portfolio = response.data;
          this.specimen = this.portfolio[this.$route.name]
        })
      },
      getImgSrc(dir, src) {
          let image = dir + '/' + src;
          return require('../assets/' + image);
      }
    },
    created() {
      this.fetchData();
    },
  }
</script>
