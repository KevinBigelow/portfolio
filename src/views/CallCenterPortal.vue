<template>
  <div class="specimen-view-content view-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <heading-tag class="has-text-gray-mid" :level="3">What it is:</heading-tag>
      <paragraph-tag>A web interface built for call center agents. It was designed to allow call center agents to browse and submit offers returned by several different API. The agents needed to see real-time offer submission statuses, and get quick visibility of information returned with each offer.</paragraph-tag>
      <paragraph-tag>The completion of this project significantly increased revenue.</paragraph-tag>
      <heading-tag class="has-text-gray-mid" :level="3">Tools:</heading-tag>
      <ul>
        <list-item>jQuery / Javascript</list-item>
        <list-item>Django / Python</list-item>
        <list-item>Bootstrap</list-item>
      </ul>
      <div class="mt-4">
        <heading-tag class="has-text-gray-mid" :level="3">What I Did:</heading-tag>
        <paragraph-tag>I built it on top of our existing backend system which already served offers to the web traffic side of our business.</paragraph-tag>
        <paragraph-tag>In addition to designing and building the frontend interface, I improved how we parsed and returned data from different APIs to be more consistent on the backend.</paragraph-tag>
      </div>
      <div class="mt-4">
        <heading-tag class="has-text-gray-mid" :level="3">The Long Form:</heading-tag>
        <paragraph-tag>This form contains fields known to be shared by multiple APIs. Making the form large upfront eliminated duplicated work when agents needed to submit multiple offers.</paragraph-tag>
        <paragraph-tag>All fields could be pre-populated by GET parameters.</paragraph-tag>
        <ImageComponent :directory="specimen.slug" :image="specimen.images['results']" class="is-full-width border-radius--3 mt-2"></ImageComponent>
      </div>
      <div class="mt-4 flex blurb-with-image">
        <div>
          <heading-tag class="has-text-gray-mid" :level="3">Program List Toggle</heading-tag>
          <paragraph-tag>If offers have more than one program option in its form, agents could quickly preview the options with this UI affordance.</paragraph-tag>
        </div>
        <div class="ph-1">
          <ImageComponent :directory="specimen.slug" :image="specimen.images['toggle']" constrained="0" class="is-margin-centered is-block is-full-width-mobile"></ImageComponent>
        </div>
      </div>
      <div class="mt-4 flex blurb-with-image">
        <div>
          <heading-tag class="has-text-gray-mid" :level="3">Instant Feedback</heading-tag>
          <paragraph-tag>Allowing the agent to see offer submission statuses helps them determine whether to make any corrections on a submission, or pursue another offer that matches their client’s needs.</paragraph-tag>
        </div>
        <div class="ph-1">
          <ImageComponent :directory="specimen.slug" :image="specimen.images['feedback']" constrained="0" class="is-margin-centered is-block is-full-width-mobile"></ImageComponent>
        </div>
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
  @import "../styles/components/_blurb_with_image.scss";
</style>
