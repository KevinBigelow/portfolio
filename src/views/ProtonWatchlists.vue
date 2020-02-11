<template>
  <div class="specimen-view-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <h3 class="is-size-5 has-text-weight-bold mb-1">The Problem:</h3>
      <p class="is-family-sans-serif p-content mb-1">Users spend excessive time digging through the software (Proton) for stats and configuration updates.</p>
      <p class="is-family-sans-serif p-content mb-2">Each user has a handful of pages in Proton they checked on daily basis. Each user’s page set was unique to them.</p>
      <h3 class="is-size-5 has-text-weight-bold mb-1">The Solution:</h3>
      <p class="is-family-sans-serif p-content mb-1">Provide the ability for users to create customizable lists of pages.</p>
      <p class="is-family-sans-serif p-content mb-4">Each item in the list displays the two most important stats and exposed links for the two to three pages associated with the item.</p>
      <div class="mb-4" style="padding:56.25% 0 0 0;position:relative;">
        <iframe src="https://player.vimeo.com/video/388148236?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <ul>
        <li class="flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3 mb-1">Adding pages to watchlists</h3>
            <p class="is-family-sans-serif mb-1">Users had to save pages at various depths within Proton.</p>
            <p class="is-family-sans-serif mb-1">To reduce the learning curve of creating watchlists we added this button to each page that could be added to a watchlist.</p>
            <p class="is-family-sans-serif mb-1">This button is a bookmark with superpowers.</p>
          </div>
          <div class="pt-4 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['addToWatchlistButton']" constrained="0" class="is-margin-centered is-block"></ImageComponent>
          </div>
        </li>
        <li class="flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3 mb-1">The first interaction</h3>
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
            <h3 class="has-text-primary is-size-3 mb-1">If watchlists exist</h3>
            <p class="is-family-sans-serif mb-1">Any watchlist created by the user is displayed and easily added to with the click of a button.</p>
          </div>
          <div class="pt-1 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['addToWatchlist']" constrained="0" class="is-margin-centered is-block"></ImageComponent>
          </div>
        </li>
        <li class="flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3 mb-1">What if the page has been added already?</h3>
            <p class="is-family-sans-serif mb-1">Any watchlist that already includes the page will be listed, but disabled and grayed out.</p>
            <p class="is-family-sans-serif mb-1">On hover, a message is displayed.</p>
          </div>
          <div class="pt-1 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['existsInWatchlist']" constrained="0" class="is-margin-centered is-block"></ImageComponent>
          </div>
        </li>
        <li>
          <div class="pt-1 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['dashboard']" class="is-full-width border-radius--3 box-shadow--gray"></ImageComponent>
          </div>
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
    mounted() {
      let vimeoResponsive = document.createElement('script');
      vimeoResponsive.setAttribute('src', 'https://player.vimeo.com/api/player.js');
      document.head.appendChild(vimeoResponsive);
    }
  }
</script>

<style scoped lang="scss">
  @import "../styles/views/specimen";
  @import "../styles/components/_blurb_with_image.scss";
</style>
