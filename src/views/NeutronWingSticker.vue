<template>
  <div class="specimen-page-content page-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <p class="is-family-sans-serif p-content mb-1">Neutron provides metaphorical wings to their employees and <span class="is-non-breaking">to their clients.</span></p>
      <p class="is-family-sans-serif p-content mb-1">These stickers were designed them to be handed out with business cards at conferences and other networking events.</p>
      <div class="well well-vertical-gradient mt-3">
        <ImageComponent :directory="specimen.slug" :image="specimen.images['holding']" class="is-full-width mb-4"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['artFront']" class="is-full-width mb-4 mt-4"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['artBack']" class="is-full-width mb-4 mt-4"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['stackPlusBack']" class="is-full-width mb-3 mt-4"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['fullFront']" class="is-full-width mb-3"></ImageComponent>
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

<style scoped lang="scss">
  @import "../styles/views/specimen";
</style>
