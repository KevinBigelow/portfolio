<template>
  <div class="home">
    <div class="columns" v-if="portfolio">
      <div class="column is-half">
        <SpecimenTile :specimen="portfolio.NeutronWingSticker" :key="portfolio.NeutronWingSticker.slug"></SpecimenTile>
        <SpecimenTile :specimen="portfolio.NeutronPromoPamphlet" :key="portfolio.NeutronPromoPamphlet.slug"></SpecimenTile>
        <SpecimenTile :specimen="portfolio.Fusion" :key="portfolio.Fusion.slug"></SpecimenTile>
      </div>
      <div class="column is-half margin-top--xl">
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
