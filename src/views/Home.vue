<template>
  <div class="view-content">
    <div class="columns is-0 is-variable is-tablet" v-if="portfolio">
      <div class="specimen-grid">
        <SpecimenTile v-for="specimen in portfolio" :specimen="specimen" :key="specimen.slug"/>
      </div>
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
  @import "../styles/components/specimen_tile";
  .specimen-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: $tablet) {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
