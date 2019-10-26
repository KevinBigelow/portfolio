<template>
  <div>
    <span v-if="specimen">
      {{specimen.name}}
      <img :src="getImgSrc(specimen.slug, specimen.featured_image.src)">
    </span>
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
