<template>
  <div class="specimen-page-content page-content">
    <article v-if="specimen">
      <SpecimenHeading :specimen="specimen"></SpecimenHeading>
      <div class="well well-vertical-gradient mt-3">
        <img v-for="(data, index) in images" :key="index"
             :data-srcset="getImgSrcSet(specimen.slug, index, data.sizes, data.extension)"
             v-lazy="getImgSrc(specimen.slug, index + '--' + data.sizes[0] + data.extension)"
             class="is-full-width mb-3">
      </div>
    </article>
  </div>
</template>

<script>
  import SpecimenHeading from "../components/SpecimenHeading"
  import fetchSpecimen from '../mixins/fetchSpecimen.js'
  import getImgSrcSet from "../mixins/getImgSrcSet";

  export default {
    name: 'Specimen',
    mixins: [fetchSpecimen, getImgSrcSet],
    data() {
      return {
        images: {
          'cover': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadOne': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadOneDetail': {sizes: [600, 1000, 2108, 2736], extension: '.jpg'},
          'spreadTwoA': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadTwoDetailA': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadTwoB': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadTwoDetailB': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadThree': {sizes: [600, 1000, 2108, 2736], extension: '.jpg'},
          'spreadFourA': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadFourB': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadFourDetailB': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadFourTransition': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadFive': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadFiveA': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
          'spreadFiveDetailA': {sizes: [600, 1000, 2108, 3648], extension: '.jpg'},
        }
      }
    },
    props: ['slug'],
    methods: {
      getImgSrc(dir, src) {
          let image = dir + '/' + src;
          return require('@/assets/' + image);
      },
    },
    components: {
      SpecimenHeading
    },
  }
</script>
