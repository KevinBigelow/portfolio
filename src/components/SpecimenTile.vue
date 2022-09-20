<template>
  <KinesisContainer class="is-relative specimen-tile-container">
    <router-link :to="{name: specimen.slug, params: {slug: specimen.slug}}" class="is-absolute specimen-tile-meta-wrap flex--column justify-content--end">
      <div class="specimen-tile-meta border-radius--5">
        <div class="flex--row justify-content--space-between">
          <div class="pv-2 ph-2">
            <h4 class="title is-size-3 has-text-weight-bold specimen-tile-meta-title">{{specimen.name}}</h4>
            <ul class="subtitle flex--row flex-wrap">
              <li v-for="(cat, index) in specimen.categories" :key="cat" class="is-size-4 specimen-tile-meta-category">
                {{cat}}<span v-if="index !== specimen.categories.length - 1">,&#32;</span></li>
            </ul>
          </div>
        </div>
      </div>
    </router-link>
    <KinesisElement type="translate" :strength="4">
      <div class="specimen-tile flex align-items--end justify-content--center box-shadow--gray-light"
                   :style="{'background-image': 'url(' + require(`@/assets/${specimen.slug}/${specimen.featured_image.src}`) + ')'}"></div>
      <KinesisElement :strength="-10" class="specimen-tile-shadow"></KinesisElement>
      <KinesisElement :strength="10" class="specimen-tile-shadow"></KinesisElement>
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
