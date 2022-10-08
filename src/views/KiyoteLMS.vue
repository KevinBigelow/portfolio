<template>
  <div class="specimen-view-content view-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <heading-tag class="has-text-gray-mid" :level="3">What is Kiyote:</heading-tag>
      <paragraph-tag>Kiyote is a Lead Management SaaS product designed to scale across any vertical.</paragraph-tag>
      <paragraph-tag>Companies who use Kiyote are able to build out offers with a robust set of properties. Those properties determine which offers return from Kiyote’s search API.</paragraph-tag>
      <paragraph-tag>The system has high coverage for testing a lead's likelihood of selling, and provides visibility into each stage a lead passes through during its lifecycle.</paragraph-tag>
      <heading-tag class="has-text-gray-mid" :level="3">Tools:</heading-tag>
      <ul>
        <list-item>VueJs</list-item>
        <list-item>Vuex</list-item>
        <list-item>Axios to interact with the backend (Django REST Framework)</list-item>
        <list-item>TailwindCss</list-item>
        <list-item>Vee-Validate</list-item>
      </ul>
      <ImageComponent :directory="specimen.slug" :image="specimen.images['leadData']" class="is-full-width border-radius--3 mt-2"></ImageComponent>
      <heading-tag class="has-text-gray-mid" :level="3">What I Did:</heading-tag>
      <paragraph-tag>I hired, trained, and led the frontend team (2 reports) as we built Kiyote from the ground up. I would prepare feature briefs which often included a mockup or prototype and assign them to the team. We would talk through methods of implementation in whatever depth was necessary.</paragraph-tag>
      <paragraph-tag>My role didn’t preclude me from working in the trenches, I worked alongside my reports, each of us responsible for building our own features.</paragraph-tag>

      <ImageComponent :directory="specimen.slug" :image="specimen.images['reasonMapping']" class="is-full-width border-radius--3 mt-2"></ImageComponent>
      <paragraph-tag>In addition to leading the planning and development of features I was responsible for Kiyote’s UI design system.</paragraph-tag>
      <paragraph-tag>To achieve a cohesive look and feel I created reusable base components like buttons, tables, pagination, tabs, panels, tooltips, form fields, and modals utilizing the Tailwind CSS framework.</paragraph-tag>
      <article-linkouts/>
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
      SpecimenHeading,
      ImageComponent
    },
  }
</script>

<style scoped lang="scss">
  @import "../styles/views/specimen";
</style>
