<template>
  <KinesisContainer event="mouse">
    <KinesisElement type="depth" :strength="1" class="specimen-tile-container mb-3">
      <router-link :to="{name: specimen.slug, params: {slug: specimen.slug}}"
                   class="specimen-tile flex align-items--end justify-content--center"
                   :style="{'background-image': 'url(' + require(`@/assets/${specimen.slug}/${specimen.featured_image.src}`) + ')'}">
        <KinesisElement class="specimen-tile-meta-wrap is-full-width">
          <div class="specimen-tile-meta card border-radius--5">
            <div class="card-header flex--row justify-content--space-between">
              <div class="pv-2 ph-2">
                <h4 class="is-size-5 has-text-weight-bold">{{specimen.name}}</h4>
                <ul class="subtitle flex--row">
                  <li v-for="(cat, index) in specimen.categories" :key="cat" class="is-size-6 has-text-primary">
                    {{cat}}<span v-if="index !== specimen.categories.length - 1">• </span></li>
                </ul>
              </div>
              <span class="is-size-4 card-header-icon">&rsaquo;</span>
            </div>
          </div>
        </KinesisElement>
      </router-link>
      <KinesisElement class="specimen-tile-shadow"></KinesisElement>
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

<style scoped lang="scss">
  @import "../styles/components/specimen_tile";
</style>
