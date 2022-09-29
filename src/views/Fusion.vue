<template>
  <div class="specimen-view-content view-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <heading-tag class="has-text-gray-mid" :level="3">What is Fusion:</heading-tag>
      <paragraph-tag>Leads generated through a call center require a call recording file to be saved and managed for legal and quality assurance reasons. Each call recording file typically needs to be renamed, stored, and delivered to various API endpoints.</paragraph-tag>
      <div class="mt-4">
        <heading-tag class="has-text-gray-mid" :level="3">What I Did:</heading-tag>
        <paragraph-tag>I designed the user interface, engineered the frontend of the web application, and directed the graphic design intern in creating the custom app icons and logo.</paragraph-tag>
      </div>
      <div class="mt-4">
        <heading-tag class="has-text-gray-mid" :level="3">Tools:</heading-tag>
        <ul>
          <list-item>jQuery / Javascript</list-item>
          <list-item>Django / Python</list-item>
          <list-item>Bootstrap</list-item>
        </ul>
      </div>
      <div class="mt-4">
        <heading-tag class="has-text-gray-mid" :level="3">Call Recording Page:</heading-tag>
        <paragraph-tag>This page gives visibility into the file’s reconciliation process allowing the user to view and correct any issues.</paragraph-tag>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['reconciliationFail']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['reconciliationSuccess']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
      </div>
      <div class="mt-4">
        <heading-tag class="has-text-gray-mid" :level="3">Table Views</heading-tag>
        <paragraph-tag>The interface leverages a large amount of tables when presenting data.</paragraph-tag>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['analyticsSourcePage']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
      </div>
      <div class="mt-4">
        <heading-tag class="has-text-gray-mid" :level="3">Auth Pages</heading-tag>
        <paragraph-tag>Designed to add character to the experience.</paragraph-tag>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['login']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['logout']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['resetPassword']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['updatePassword']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
      </div>
      <article-linkouts/>
    </article>
  </div>
</template>

<script>
  import SpecimenHeading from "../components/SpecimenHeading";
  import ImageComponent from "../components/ImageComponent";
  import fetchSpecimen from '../mixins/fetchSpecimen.js';
  import getImgSrc from "../mixins/getImgSrc";

  export default {
    name: 'Specimen',
    props: ['slug'],
    mixins: [fetchSpecimen, getImgSrc],
    components: {
      SpecimenHeading, ImageComponent
    },
  }
</script>

<style scoped lang="scss">
  @import "../styles/views/specimen";
</style>
