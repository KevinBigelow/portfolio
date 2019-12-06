<template>
  <div class="specimen-page-content page-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <div class="well well-vertical-gradient mt-3">
        <img :src="getImgSrc(specimen.slug, specimen.featured_image.src)" class="is-full-width">
      </div>
    </article>
  </div>
</template>

<script>
  import SpecimenHeading from "../components/SpecimenHeading";
  import fetchSpecimen from '../mixins/fetchSpecimen.js'

  export default {
    name: 'Specimen',
    props: ['slug'],
    methods: {
      getImgSrc(dir, src) {
          let image = dir + '/' + src;
          return require('../assets/' + image);
      }
    },
    mixins: [fetchSpecimen],
    components: {
      SpecimenHeading
    },
  }
</script>
