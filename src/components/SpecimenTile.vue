<template>
  <router-link
          :to="{name: specimen.slug, params: {slug: specimen.slug}}"
          class="specimen-tile flex align-items--center justify-content--center"
          :style="{'background-image': 'url(' + require(`@/assets/${specimen.slug}/${specimen.featured_image.src}`) + ')'}">
    <span class="specimen-link-text has-text-white is-size-4">{{specimen.name}}</span>
  </router-link>
</template>

<script>
  export default {
    props: {
      specimen: {}
    }
  }
</script>

<style scoped lang="scss">
  .specimen-tile {
      min-height: 400px;
      margin-bottom: 2rem;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      transition: border-color .25s;
      border-radius: $border-radius-5;
      overflow: hidden;

      .specimen-link-text, &:after {
          transition: opacity .25s;
      }

      &:after {
          content: '';
          background: $primary;
          position: absolute;
          display: block;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 0;
          opacity: .85;
      }

      .specimen-link-text {
          z-index: 1;
      }

      &:not(:hover) {
          .specimen-link-text, &:after {
              opacity: 0;
          }
      }
  }
</style>
