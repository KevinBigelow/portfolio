<template>
  <KinesisContainer event="mouse">
    <KinesisElement type="depth" :strength="2" class="specimen-tile-container mb-3">
      <router-link :to="{name: specimen.slug, params: {slug: specimen.slug}}"
                   class="specimen-tile flex align-items--end justify-content--center box-shadow--gray-light"
                   :style="{'background-image': 'url(' + require(`@/assets/${specimen.slug}/${specimen.featured_image.src}`) + ')'}">
        <KinesisElement class="specimen-tile-meta-wrap is-full-width" :strength="1" type="translate">
          <div class="specimen-tile-meta card border-radius--5">
            <div class="card-header flex--row justify-content--space-between">
              <div class="pv-2 ph-2">
                <h4 class="is-size-5 has-text-weight-bold specimen-tile-meta-title">{{specimen.name}}</h4>
                <ul class="subtitle flex--row flex-wrap">
                  <li v-for="(cat, index) in specimen.categories" :key="cat" class="is-size-5 specimen-tile-meta-category">
                    {{cat}}<span v-if="index !== specimen.categories.length - 1">,&#32;</span></li>
                </ul>
              </div>
              <span class="is-size-4 specimen-tile-meta-icon card-header-icon">&rsaquo;</span>
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
