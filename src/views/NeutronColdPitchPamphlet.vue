<template>
  <div class="specimen-page-content page-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <div class="well well-vertical-gradient mt-3">
        <img v-for="img in images" :key="img" v-lazy="getImgSrc(specimen.slug, img)" class="is-full-width mb-3"/>
      </div>
    </article>
  </div>
</template>

<script>
  import SpecimenHeading from "../components/SpecimenHeading";
  import fetchSpecimen from '../mixins/fetchSpecimen.js'

  export default {
    name: 'Specimen',
    mixins: [fetchSpecimen],
    data() {
      return {
        images: [
            '1-cover--lg.jpg',
            '2-spread-one--lg.jpg',
            '3-spread-one-detail--lg.jpg',
            '4-spread-two-a--lg.jpg',
            '5-spread-two-detail-a--lg.jpg',
            '6-spread-two-b--lg.jpg',
            '7-spread-two-detail-b--lg.jpg',
            '8-spread-three--lg.jpg',
            '9-spread-four-a--lg.jpg',
            '10-spread-four-b--lg.jpg',
            '11-spread-four-detail-b--lg.jpg',
            '12-spread-four-transition--lg.jpg',
            '13-spread-four-a--lg.jpg',
            '14-spread-four-detail-a--lg.jpg',
            '15-spread-four--lg.jpg',
        ]
      }
    },
    props: ['slug'],
    methods: {
      getImgSrc(dir, src) {
          let image = dir + '/' + src;
          return require('../assets/' + image);
      },
    },
    components: {
      SpecimenHeading
    },
  }
</script>
