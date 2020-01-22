<template>
  <div class="home-content page-content">
    <div class="columns is-tablet" v-if="portfolio">
      <div class="column is-half-tablet">
        <SpecimenTile :specimen="portfolio.NeutronWingSticker" :key="portfolio.NeutronWingSticker.slug"></SpecimenTile>
        <SpecimenTile :specimen="portfolio.WebDesignMarketingPamphlet" :key="portfolio.WebDesignMarketingPamphlet.slug"></SpecimenTile>
        <SpecimenTile :specimen="portfolio.Fusion" :key="portfolio.Fusion.slug"></SpecimenTile>
      </div>
      <div class="column is-half-tablet staggered-column">
        <SpecimenTile :specimen="portfolio.CallCenterPortal" :key="portfolio.CallCenterPortal.slug"></SpecimenTile>
        <SpecimenTile :specimen="portfolio.ProtonWatchlists" :key="portfolio.ProtonWatchlists.slug"></SpecimenTile>
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
            console.log(error);
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

<style lang="scss" scoped>
  .home-content {
    background: $white-ter;
    padding: 0 2rem;
    margin: 4.5rem 0 6rem;
    border-radius: $border-radius-20;

    .column {
      margin-bottom: -6rem;

      :first-child {
        margin-top: -4rem;
      }
    }

  }
</style>
