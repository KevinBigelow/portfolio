<template>
  <div class="specimen-page-content page-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <div class="well well-vertical-gradient mt-3">
        <ImageComponent :directory="specimen.slug" :image="specimen.images['dashboard']" classes="is-full-width mb-5"></ImageComponent>
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
            <ImageComponent :directory="specimen.slug" :image="specimen.images['addToWatchlistButton']" classes=""></ImageComponent>
          </div>
        </li>
        <li class="flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">The first interaction</h3>
            <p class="is-family-sans-serif mb-1">No watchlists would exist for the user at this point. This is the flow for that use case.</p>
            <p class="is-family-sans-serif mb-1">When the dialog opens, the field is active and ready for input.</p>
            <p class="is-family-sans-serif mb-1">Once the user types anything into the input field, the save button appears.</p>
          </div>
          <div class="pt-2 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['createWatchlist']" classes=""></ImageComponent>
          </div>
        </li>
        <li class="flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">If watchlists exist</h3>
            <p class="is-family-sans-serif mb-1">Any watchlist created by the user is displayed and easily added to with the click of a button.</p>
          </div>
          <div class="pt-2 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['addToWatchlist']" classes=""></ImageComponent>
          </div>
        </li>
        <li class="flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">What if the page has been added already?</h3>
            <p class="is-family-sans-serif mb-1">Any watchlist that already includes the page will be listed, but disabled and grayed out.</p>
            <p class="is-family-sans-serif mb-1">On hover, a message is displayed.</p>
          </div>
          <div class="pt-2 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['existsInWatchlist']" classes=""></ImageComponent>
          </div>
        </li>
      </ul>
      <div class="well well-vertical-gradient mt-3">
        <a href="#">
          <ImageComponent :directory="specimen.slug" :image="specimen.images['prototypeLink']" classes="is-full-width"></ImageComponent>
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

<style scoped>
  .blurb-with-image {
    flex-direction: column;
    margin-bottom: 10rem;
  }
  @media screen and (min-width: 1000px) {
    .blurb-with-image {
      flex-direction: row;
    }
    .blurb-with-image > * {
      width: 50%;
    }
  }
</style>
