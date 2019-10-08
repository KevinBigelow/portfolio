<template>
  <div class="specimen" v-if="specimen_id !== null">
    <h1>{{ name }}</h1>
    <h2 class="has-text-primary"><span v-for="(category, index) in categories" :key="index">{{ category }}</span></h2>
    <p>{{ description }}</p>
    <div class="panel">
      <img :src="require(`@/assets/${featured_image}`)" v-if="featured_image !== null">
<!--      <figure v-for="m in specimen[0].media" :key="m.src" class="">-->
<!--        <img :src="require(`@/assets/${m.src}`)" :alt="m.alt">-->
<!--      </figure>-->
    </div>
  </div>
</template>

<script>
  import { db } from '../main'
  export default {
    name: 'specimen',
    data () {
      return {
        name: null,
        description: null,
        featured_image: null,
        categories: null,
        media: null,
        specimen_id: null
      }
    },
    firestore () {
      return {
        // specimen: db.collection('specimens').where('specimen_id', '==', parseInt(this.$route.params.specimen_id))
        specimen: db.collection('specimens').where('specimen_id', '==', parseInt(this.$route.params.specimen_id)).get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                this.specimen_id = doc.data().specimen_id;
                this.name = doc.data().name;
                this.categories = doc.data().categories;
                this.description = doc.data().description;
                this.media = doc.data().media;
                this.featured_image = doc.data().featured_image;
              })
            })
      }
    }
  }
</script>
