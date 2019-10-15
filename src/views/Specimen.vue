<template>
  <div>
    <span v-if="specimen">
      {{specimen.name}}
      <img :src="require(`@/assets/${specimen.slug}/${specimen.featured_image.src}`)">
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
    },
    created() {
      this.fetchData();
    },
  }
</script>
