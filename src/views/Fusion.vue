<template>
  <div class="specimen-view-content view-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <p class="is-family-sans-serif p-content mb-1">Leads generated through a call center have a correlating call recording file, which is used for legal and quality assurance reasons. Each call recording file typically needs to be renamed, stored, and delivered to various API endpoints.</p>
      <p class="is-family-sans-serif p-content mb-1">Many lead generators often rename their files manually for each of their clients, and organize their files with excel spreadsheets. At a high volume this is unsustainable.</p>
      <p class="is-family-sans-serif p-content mb-4">We built Fusion for our internal needs — it was designed and marketed as a SaaS product.</p>
      <ImageComponent :directory="specimen.slug" :image="specimen.images['reconciliationSuccessCropped']" class="is-full-width border-radius--3 box-shadow--gray"></ImageComponent>
      <div class="mt-4">
        <h3 class="has-text-primary is-size-2 mb-1">Tools</h3>
        <ul>
          <li>Django / Python</li>
          <li>Bootstrap</li>
          <li>jQuery / Javascript</li>
        </ul>
        <h3 class="has-text-primary is-size-2 mb-1">What I Did</h3>
        <p class="is-family-sans-serif p-content mb-1">I designed the user interface, engineered the front-end of the application, and directed the graphic design intern in creating the custom app icons and logo.</p>
        <p class="is-family-sans-serif p-content mb-1">The result was a persistent layout, intuitive navigation and forms, a delightful personality, and another fulfilled deadline.</p>
      </div>
      <div class="mt-4">
        <h3 class="has-text-primary is-size-2 mb-1">Call Recording Page</h3>
        <p class="is-family-sans-serif p-content mb-1">This page gives visibility into the file’s reconciliation process.</p>
        <p class="is-family-sans-serif p-content mb-1">The main goal of this page is to display the data reaped from each stage to make it easy to scan.</p>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['reconciliationFail']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['reconciliationSuccess']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
      </div>
      <div class="mt-4">
        <h3 class="has-text-primary is-size-2 mb-1">Table Views</h3>
        <p class="is-family-sans-serif p-content mb-1">Many pages in Fusion organize data into tables.</p>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['analyticsSourcePage']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
      </div>
      <div class="mt-4">
        <h3 class="has-text-primary is-size-2 mb-1">User Auth Pages</h3>
        <p class="is-family-sans-serif p-content mb-1">These pages were designed to add character to the experience.</p>
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
