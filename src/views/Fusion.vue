<template>
  <div class="specimen-view-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <p class="is-family-sans-serif p-content mb-1">Fusion is a call recording management web application, designed for lead generation experts, built to be SAAS ready.</p>
      <p class="is-family-sans-serif p-content mb-1">I designed the interface, engineered the front-end of the application, and the directed the graphic design intern in creating the custom app icons and logo.</p>
      <p class="is-family-sans-serif p-content mb-4">The result was a persistent layout, intuitive navigation and forms, a delightful personality, and a fulfilled deadline.</p>
      <ImageComponent :directory="specimen.slug" :image="specimen.images['reconciliationSuccessCropped']" class="is-full-width border-radius--3 box-shadow--gray"></ImageComponent>
      <ul>
        <li class="mt-4">
          <h3 class="has-text-primary is-size-3 mb-1">Account/Authentication Pages</h3>
          <ImageComponent :directory="specimen.slug" :image="specimen.images['login']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
          <ImageComponent :directory="specimen.slug" :image="specimen.images['logout']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
          <ImageComponent :directory="specimen.slug" :image="specimen.images['resetPassword']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
          <ImageComponent :directory="specimen.slug" :image="specimen.images['updatePassword']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
        </li>
        <li class="mt-4">
          <h3 class="has-text-primary is-size-3 mb-1">Call Recording Page</h3>
          <p class="is-family-sans-serif p-content mb-1">This page gives visibility into the file’s reconciliation process.</p>
          <p class="is-family-sans-serif p-content mb-1">The main goal of this page is to display the data reaped from each stage to make it easy to scan.</p>
          <p class="is-family-sans-serif p-content mb-1">Both sidebars stick to the top of the page as the user scrolls. The left sidebar provides shortcut links for each stage.</p>
          <ImageComponent :directory="specimen.slug" :image="specimen.images['reconciliationFail']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
          <ImageComponent :directory="specimen.slug" :image="specimen.images['reconciliationSuccess']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
        </li>
        <li class="mt-4">
          <h3 class="has-text-primary is-size-3 mb-1">Data-Heavy Pages</h3>
          <p class="is-family-sans-serif p-content mb-1">The majority of pages in Fusion display data in tables. Below are a couple examples of such pages.</p>
          <ImageComponent :directory="specimen.slug" :image="specimen.images['analyticsSources']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
          <ImageComponent :directory="specimen.slug" :image="specimen.images['analyticsSourcePage']" class="is-full-width mt-3 border-radius--3 box-shadow--gray"></ImageComponent>
        </li>
      </ul>
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
