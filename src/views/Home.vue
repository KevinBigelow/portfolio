<template>
  <div class="view-content">
    <div class="columns is-0 is-variable is-tablet" v-if="portfolio">
      <div class="column is-half-tablet">
        <SpecimenTile :specimen="portfolio.NeutronWingSticker" :key="portfolio.NeutronWingSticker.slug"></SpecimenTile>
        <SpecimenTile :specimen="portfolio.ProtonWatchlists" :key="portfolio.ProtonWatchlists.slug"></SpecimenTile>
        <SpecimenTile :specimen="portfolio.WebDesignMarketingPamphlet" :key="portfolio.WebDesignMarketingPamphlet.slug"></SpecimenTile>

      </div>
      <div class="column is-half-tablet staggered-column">
        <SpecimenTile :specimen="portfolio.CallCenterPortal" :key="portfolio.CallCenterPortal.slug"></SpecimenTile>
        <SpecimenTile :specimen="portfolio.Fusion" :key="portfolio.Fusion.slug" class="specimen-tile-bg-top-left"></SpecimenTile>
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
</style>
