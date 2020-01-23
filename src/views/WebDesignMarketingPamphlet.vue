<template>
  <div class="specimen-page-content page-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <p class="is-family-sans-serif p-content mb-1">This pamphlet was designed to cold-pitch local businesses to purchases our web development services. The goal was to land clients by leaving an exciting, informational artifact after a conversation and cold-pitch with the potential client.</p>
      <div class="well well-vertical-gradient mt-3">
        <img v-for="(data, index) in specimen.images" :key="index"
             :data-srcset="getImgSrcSet(specimen.slug, index, data['sizes'], data['extension'])"
             v-lazy="getImgSrc(specimen.slug, index + '--' + data['sizes'][0] + data['extension'])"
             :alt="data['alt']"
             class="is-full-width mb-3">
      </div>
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
