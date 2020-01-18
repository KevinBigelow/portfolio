<template>
  <img :key="image['name']"
     :data-srcset="getImgSrcSet(directory, image['name'], image['sizes'], image['extension'])"
     v-lazy="getImgSrc(directory, image['name'] + '--' + image['sizes'][0] + image['extension'])"
     :alt="image['alt']"
     :class="classes" :style="[constrained != null ?{maxWidth: image['sizes'][constrained] + `px`} : {}]"
       v-if="image">
</template>

<script>
  import getImgSrc from "../mixins/getImgSrc";
  import getImgSrcSet from "../mixins/getImgSrcSet";

  export default {
    mixins: [getImgSrc, getImgSrcSet],
    props: {
      directory: null,
      image: {},
      classes: null,
      constrained: null // takes number referring to image.sizes data
    }
  }
</script>
