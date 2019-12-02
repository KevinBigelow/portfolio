<template>
  <div class="specimen-page-content page-content">
    <article v-if="specimen">
      <h1 class="title is-size-2">{{specimen.name}}</h1>
      <h2 class="subtitle is-size-4 is-size-3-fullhd has-text-primary"><span v-for="cat in specimen.categories" :key="cat">{{cat}} </span></h2>
      <p class="is-family-sans-serif is-size-5-fullhd p-content" v-html="specimen.description"></p>
      <div class="well well-vertical-gradient mt-3">
        <img v-for="img in images" :key="img" v-lazy="getImgSrc(specimen.slug, img)" class="is-full-width mb-3"/>
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
        specimen: null,
        assetsDir: '../assets/',
        images: [
            '1-cover--lg.jpg',
            '2-spread-one--lg.jpg',
            '3-spread-one-detail--lg.jpg',
            '4-spread-two-a--lg.jpg',
            '5-spread-two-detail-a--lg.jpg',
            '6-spread-two-b--lg.jpg',
            '7-spread-two-detail-b--lg.jpg',
            '8-spread-three--lg.jpg',
            '9-spread-four-a--lg.jpg',
            '10-spread-four-b--lg.jpg',
            '11-spread-four-detail-b--lg.jpg',
            '12-spread-four-transition--lg.jpg',
            '13-spread-four-a--lg.jpg',
            '14-spread-four-detail-a--lg.jpg',
            '15-spread-four--lg.jpg',
        ]
      }
    },
    props: ['slug'],
    methods: {
      fetchData() {
        axios.get(this.baseUrl + 'portfolio.json').then(response => {
          this.portfolio = response.data;
          this.specimen = this.portfolio[this.$route.params.slug]
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
