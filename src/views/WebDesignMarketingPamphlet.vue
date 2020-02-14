<template>
  <div class="specimen-view-content view-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <p class="is-family-sans-serif p-content mb-1">This pamphlet was designed to be brought with our sales force while cold-pitching local businesses with web design and development proposals.</p>
      <p class="is-family-sans-serif p-content mb-1">The goal was to help the potential client visualize the possibilities, ensure them that they were in competent hands, and provide them with statistics to support the sales force.</p>
      <p class="is-family-sans-serif p-content mb-4">The target audience was local businesses who had no website, an outdated website, and/or a weak web presence.</p>
      <img v-for="(data, index) in specimen.images" :key="index"
           :data-srcset="getImgSrcSet(specimen.slug, index, data['sizes'], data['extension'])"
           v-lazy="getImgSrc(specimen.slug, index + '--' + data['sizes'][0] + data['extension'])"
           :alt="data['alt']"
           class="is-full-width mb-3">
    </article>
  </div>
</template>

<script>
  import SpecimenHeading from "../components/SpecimenHeading"
  import fetchSpecimen from '../mixins/fetchSpecimen.js'
  import getImgSrcSet from "../mixins/getImgSrcSet";
  import getImgSrc from "../mixins/getImgSrc";

  export default {
    name: 'Specimen',
    mixins: [fetchSpecimen, getImgSrcSet, getImgSrc],
    props: ['slug'],
    components: {
      SpecimenHeading
    },
  }
</script>

<style scoped lang="scss">
  @import "../styles/views/specimen";
</style>
