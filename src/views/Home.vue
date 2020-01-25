<template>
  <div class="home-content page-content">
    <div class="columns is-tablet" v-if="portfolio">
      <div class="column is-half-tablet">
        <KinesisContainer event="mouse">
          <KinesisElement type="depth" :strength="2">
            <SpecimenTile :specimen="portfolio.NeutronWingSticker" :key="portfolio.NeutronWingSticker.slug"></SpecimenTile>
          </KinesisElement>
        </KinesisContainer>
        <KinesisContainer event="mouse">
          <KinesisElement type="depth" :strength="2">
            <SpecimenTile :specimen="portfolio.WebDesignMarketingPamphlet" :key="portfolio.WebDesignMarketingPamphlet.slug"></SpecimenTile>
          </KinesisElement>
        </KinesisContainer>
        <KinesisContainer event="mouse">
          <KinesisElement type="depth" :strength="2">
            <SpecimenTile :specimen="portfolio.Fusion" :key="portfolio.Fusion.slug"></SpecimenTile>
          </KinesisElement>
        </KinesisContainer>
      </div>
      <div class="column is-half-tablet staggered-column">
        <KinesisContainer event="mouse">
          <KinesisElement type="depth" :strength="2">
            <SpecimenTile :specimen="portfolio.CallCenterPortal" :key="portfolio.CallCenterPortal.slug"></SpecimenTile>
          </KinesisElement>
        </KinesisContainer>
        <KinesisContainer event="mouse">
          <KinesisElement type="depth" :strength="2">
            <SpecimenTile :specimen="portfolio.ProtonWatchlists" :key="portfolio.ProtonWatchlists.slug"></SpecimenTile>
          </KinesisElement>
        </KinesisContainer>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import SpecimenTile from '../components/SpecimenTile'
  import { KinesisContainer, KinesisElement } from 'vue-kinesis'

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
            this.errored = true
          })
          .finally(() => this.loading = false);
      },
    },
    components: {
      SpecimenTile, KinesisContainer, KinesisElement
    },
  }
</script>

<style lang="scss" scoped>
  @import "../styles/views/home";
</style>
