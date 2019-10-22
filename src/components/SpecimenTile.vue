<template>
  <div class="column is-half">
    <router-link :to="{name: 'specimen', params: {slug: specimen.slug}}">
      <img :src="require(`@/assets/${specimen.slug}/${specimen.featured_image.src}`)">
      {{ specimen.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    specimen: {}
  }
}
</script>
