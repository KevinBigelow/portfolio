<template>
  <KinesisContainer class="is-relative specimen-tile-container">
    <router-link :to="{name: specimen.slug, params: {slug: specimen.slug}}" class="specimen-link"></router-link>
    <KinesisElement :strength="15" type="depth">
      <div class="specimen-tile"
                   :style="{'background-image': 'url(' + require(`@/assets/${specimen.slug}/${specimen.featured_image.src}`) + ')'}">
      </div>
    </KinesisElement>
  </KinesisContainer>
</template>

<script>
  import { KinesisContainer, KinesisElement } from 'vue-kinesis'

  export default {
    props: {
      specimen: {}
    },
    components: {
      KinesisContainer, KinesisElement
    },
  }
</script>

<style lang="scss">
  .specimen-link {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 2;
  }
  .specimen-tile {
    z-index: 1;
    position: relative;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;

    @media screen and (min-width: 1660px) {
      height: 400px;
    }

    @media screen and (min-width: $desktop) {
      min-height: 400px;
    }
  }

</style>
