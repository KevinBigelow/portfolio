<template>
  <div class="specimen-view-content view-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <p class="is-family-sans-serif p-content mb-1">Kiyote! Victory for all</p>
    </article>
  </div>
</template>

<script>
  import SpecimenHeading from "../components/SpecimenHeading";
  // import ImageComponent from "../components/ImageComponent";
  import fetchSpecimen from '../mixins/fetchSpecimen.js';

  export default {
    name: 'Specimen',
    props: ['slug'],
    mixins: [fetchSpecimen],
    components: {
      SpecimenHeading,
      // ImageComponent
    },
  }
</script>

<style scoped lang="scss">
  @import "../styles/views/specimen";
</style>
