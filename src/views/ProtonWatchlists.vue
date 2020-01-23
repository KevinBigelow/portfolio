<template>
  <div class="specimen-page-content page-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <p class="is-family-sans-serif p-content mb-1"><span class="has-text-weight-bold">The Problem:</span> Users spend excessive time digging through the software for stats and configuration updates. Each user has a handful of pages in Proton they checked on daily basis. Each user’s page set was unique to them.</p>
      <p class="is-family-sans-serif p-content mb-1"><span class="has-text-weight-bold">The Solution:</span> Provide the ability for users to create customizable lists of pages. Each item in the list displays the two most important stats and exposed links for the two to three pages associated with the item.</p>
      <div class="well well-vertical-gradient mt-3">
        <ImageComponent :directory="specimen.slug" :image="specimen.images['dashboard']" class="is-full-width mb-5"></ImageComponent>
      </div>
      <ul>
        <li class="flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">Adding pages to watchlists</h3>
            <p class="is-family-sans-serif mb-1">Users had to save pages at various depths within Proton.</p>
            <p class="is-family-sans-serif mb-1">Adding this button to each available page met the user where they were.</p>
            <p class="is-family-sans-serif mb-1">This button is a bookmark with superpowers.</p>
          </div>
          <div class="pt-4 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['addToWatchlistButton']" constrained="0" class="is-margin-centered is-block"></ImageComponent>
          </div>
        </li>
        <li class="flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">The first interaction</h3>
            <p class="is-family-sans-serif mb-1">No watchlists would exist for the user at this point. This is the flow for that use case.</p>
            <p class="is-family-sans-serif mb-1">When the dialog opens, the field is active and ready for input.</p>
            <p class="is-family-sans-serif mb-1">Once the user types anything into the input field, the save button appears.</p>
          </div>
          <div class="pt-1 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['createWatchlist']" constrained="0" class="is-margin-centered is-block"></ImageComponent>
          </div>
        </li>
        <li class="flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">If watchlists exist</h3>
            <p class="is-family-sans-serif mb-1">Any watchlist created by the user is displayed and easily added to with the click of a button.</p>
          </div>
          <div class="pt-1 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['addToWatchlist']" constrained="0" class="is-margin-centered is-block"></ImageComponent>
          </div>
        </li>
        <li class="flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">What if the page has been added already?</h3>
            <p class="is-family-sans-serif mb-1">Any watchlist that already includes the page will be listed, but disabled and grayed out.</p>
            <p class="is-family-sans-serif mb-1">On hover, a message is displayed.</p>
          </div>
          <div class="pt-1 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['existsInWatchlist']" constrained="0" class="is-margin-centered is-block"></ImageComponent>
          </div>
        </li>
      </ul>
      <div class="well well-vertical-gradient mt-3">
        <a href="#">
          <ImageComponent :directory="specimen.slug" :image="specimen.images['prototypeLink']" class="is-full-width"></ImageComponent>
        </a>
      </div>
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
  @import "../styles/components/_blurb_with_image.scss";
</style>
