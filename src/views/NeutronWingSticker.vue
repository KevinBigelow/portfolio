<template>
  <div class="specimen-page-content page-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <div class="well well-vertical-gradient mt-3">
        <ImageComponent :directory="specimen.slug" :image="specimen.images['holding']" classes="is-full-width mb-4"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['artFront']" classes="is-full-width mb-4 mt-4"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['artBack']" classes="is-full-width mb-4 mt-4"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['stackPlusBack']" classes="is-full-width mb-3 mt-4"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['fullFront']" classes="is-full-width mb-3"></ImageComponent>
      </div>
    </article>
  </div>
</template>

<script>
  import SpecimenHeading from "../components/SpecimenHeading";
  import ImageComponent from "../components/ImageComponent";
  import fetchSpecimen from '../mixins/fetchSpecimen.js';

  export default {
    name: 'Specimen',
    props: ['slug'],
    mixins: [fetchSpecimen],
    components: {
      SpecimenHeading, ImageComponent
    },
  }
</script>
