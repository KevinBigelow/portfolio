<template>
  <div class="specimen-view-content view-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <paragraph-tag>Organizing information into a compelling layout is something I really enjoy. It's a skill that crosses over between web and print design.</paragraph-tag>
      <paragraph-tag>This pamphlet was designed to be brought with our sales team when pitching our web design services to local businesses.</paragraph-tag>
      <paragraph-tag>The goal was to help the potential client visualize the possibilities, convey our expertise, and provide them with relevant statistics.</paragraph-tag>
      <paragraph-tag>The target audience was local businesses who had no website, an outdated website, and/or a weak web presence.</paragraph-tag>
      <div class="mt-5 mb-3">
        <img v-for="(data, index) in specimen.images" :key="index"
             :data-srcset="getImgSrcSet(specimen.slug, index, data['sizes'], data['extension'])"
             v-lazy="getImgSrc(specimen.slug, index + '--' + data['sizes'][0] + data['extension'])"
             :alt="data['alt']"
             class="is-full-width">
      </div>
      <article-linkouts/>
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
