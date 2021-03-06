<template>
  <div class="specimen-view-content view-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <p class="is-family-sans-serif p-content mb-1">The goal of this project was to create an interface for call center agents by utilizing the codebase that had been serving offers for exclusively for web leads.</p>
      <p class="is-family-sans-serif p-content mb-1">The solution needed to allow call center agents to navigate the offers returned, submit multiple offers, see real-time offer submission statuses, and get quick visibility of pertinent information of each offer.
      <p class="is-family-sans-serif p-content mb-4">The completion of this project multiplied our revenue.</p>
      <img :src="getImgSrc(specimen.slug, specimen.featured_image.src)" class="is-full-width border-radius--3">
      <ul>
        <li class="mt-4">
          <h3 class="has-text-primary is-size-3">The Long Form</h3>
          <p class="is-family-sans-serif p-content mb-1">The starting point for any call center agent is the long form displayed below.</p>
          <p class="is-family-sans-serif p-content mb-1">It contains fields shared by all offer forms, which eliminates duplicated work when submitting multiple offers.</p>
          <p class="is-family-sans-serif p-content mb-1">It also provides the call center agent visibility into all fields pre-populated by the GET request parameters.</p>
          <ImageComponent :directory="specimen.slug" :image="specimen.images['emptyState']" class="is-full-width border-radius--3 mt-2"></ImageComponent>
        </li>
        <li class="mt-4">
          <h3 class="has-text-primary is-size-3">Search Results</h3>
          <p class="is-family-sans-serif p-content mb-1">Our system returns as many offers match the parameters and opens the top result by default.</p>
          <ImageComponent :directory="specimen.slug" :image="specimen.images['results']" class="is-full-width border-radius--3 mt-2"></ImageComponent>
        </li>
        <li class="mt-4 flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">Program List Toggle</h3>
            <p class="is-family-sans-serif mb-1">Sometimes offers have more than one program option in its form.</p>
            <p class="is-family-sans-serif mb-1">If that is the case the call center agent is able to toggle open a list of the available programs without digging into the form.</p>
          </div>
          <div class="ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['toggle']" constrained="0" class="is-margin-centered is-block"></ImageComponent>
          </div>
        </li>
        <li class="mt-4 flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">Instant Feedback</h3>
            <p class="is-family-sans-serif mb-1">Call center agents need to move quickly through offers. Seeing the current state of previously submitted offers allows the agents to move onto the next offer quickly.</p>
          </div>
          <div class="ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['feedback']" constrained="0" class="is-margin-centered is-block"></ImageComponent>
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
  }
</script>

<style scoped lang="scss">
  @import "../styles/views/specimen";
  @import "../styles/components/_blurb_with_image.scss";
</style>
