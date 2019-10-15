<template>
  <div class="home tile is-ancestor is-vertical">
    <div v-for="specimen in portfolio" :key="specimen.slug" class="tile is-6">
      <router-link :to="{name: 'specimen', params: {slug: specimen.slug}}">
        <img :src="require(`@/assets/${specimen.slug}/${specimen.featured_image.src}`)">
        {{ specimen.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'specimen',
    data() {
      return {
        baseUrl: process.env.VUE_APP_BASE_URL,
        portfolio: null
      }
    },
    methods: {
      fetchData() {
        axios.get(this.baseUrl + 'portfolio.json').then(response => {
          this.portfolio = response.data;
        })
      }
    },
    created() {
      this.fetchData();
    },
  }
</script>
