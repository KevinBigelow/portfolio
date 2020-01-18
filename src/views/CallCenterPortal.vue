<template>
  <div class="specimen-page-content page-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <div class="well well-vertical-gradient mt-3">
        <img :src="getImgSrc(specimen.slug, specimen.featured_image.src)" class="is-full-width">
      </div>
      <ul>
        <li class="mt-4">
          <h3 class="has-text-primary is-size-3">The Long Form</h3>
          <p class="is-family-sans-serif mb-1">The starting point for any call center agent is the long form displayed below.</p>
          <p class="is-family-sans-serif mb-1">It contains fields shared by all offer forms which eliminates duplicated work when submitting multiple offers.</p>
          <p class="is-family-sans-serif mb-1">It also provides the call center agent visibility into all fields pre-populated by the GET request parameters.</p>
          <div class="mt-3">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['emptyState']" classes="border-radius--3"></ImageComponent>
          </div>
        </li>
        <li class="mt-4">
          <h3 class="has-text-primary is-size-3">Search Results</h3>
          <p class="is-family-sans-serif mb-1">Our system returns as many offers match the parameters and opens the top result by default.</p>
          <div class="mt-3">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['results']" classes="border-radius--3"></ImageComponent>
          </div>
        </li>
        <li class="mt-4 flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">Result Cards</h3>
            <p class="is-family-sans-serif mb-1">Our system returns as many offers match the parameters and opens the top result by default.</p>
          </div>
          <div class="pt-4 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['current']" classes=""></ImageComponent>
          </div>
        </li>
        <li class="mt-4 flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">Program List Toggle</h3>
            <p class="is-family-sans-serif mb-1">Sometimes offers have more than one program option in its form.</p>
            <p class="is-family-sans-serif mb-1">If that is the case the call center agent is able to toggle open a list of the available programs without digging into the form.</p>
          </div>
          <div class="pt-4 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['toggle']" classes=""></ImageComponent>
          </div>
        </li>
        <li class="mt-4 flex blurb-with-image">
          <div>
            <h3 class="has-text-primary is-size-3">Instant Feedback</h3>
            <p class="is-family-sans-serif mb-1">Call center agents need to move quickly through offers. Seeing the current state of previously submitted offers allows the agents to move onto the next offer quickly.</p>
          </div>
          <div class="pt-4 ph-1">
            <ImageComponent :directory="specimen.slug" :image="specimen.images['feedback']" classes=""></ImageComponent>
          </div>
        </li>
        <li class="mt-4">
          <div>
            <h3 class="has-text-primary is-size-3">Writing the Code</h3>
            <p class="is-family-sans-serif mb-1">Prior to the completion of this project, we had a separate codebase for our call-center portal and our web portals. Something about django jquery and some interesting constraint you hit.</p>
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
  @import "../../src/styles/components/_blurb_with_image.scss";
</style>
