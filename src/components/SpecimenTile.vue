<template>
  <router-link
          :to="{name: 'specimen', params: {slug: specimen.slug}}"
          class="specimen-tile flex align-items--center justify-content--center"
          :style="{'background-image': 'url(' + require(`@/assets/${specimen.slug}/${specimen.featured_image.src}`) + ')'}">
    <span class="button ui-button-icon-secondary">Check it out</span>
  </router-link>
</template>

<script>
export default {
  props: {
    specimen: {}
  }
}
</script>
