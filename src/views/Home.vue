<template>
  <div class="view-content">
    <div class="is-0 is-variable is-tablet" v-if="portfolio">
      <div class="specimen-grid">
        <SpecimenTile v-for="specimen in portfolio" :specimen="specimen" :key="specimen.slug"/>
      </div>
      <article-linkouts/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import SpecimenTile from '../components/SpecimenTile'

  export default {
    name: 'portfolio',
    data() {
      return {
        baseUrl: process.env.VUE_APP_BASE_URL,
        portfolio: null,
        loading: true,
        errored: false,
        is_home: true,
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios
          .get(this.baseUrl + 'portfolio.json')
          .then(response => {
            this.portfolio = response.data;
          })
          .catch(error => {
            this.errored = true
            window.console.log(error)
          })
          .finally(() => this.loading = false);
      },
    },
    components: {
      SpecimenTile
    },
  }
</script>

<style lang="scss">
  @import "../styles/components/specimen_grid";
</style>
