<template>
  <div class="specimen">
    <h1>{{ name }}</h1>
    <h2 class="has-text-primary"><span v-for="(category, index) in categories" :key="index">{{ category }}</span></h2>
    <p>{{ description }}</p>
    <div class="panel">
      <img :src="require(`@/assets/${featured_image}`)">
      <figure v-for="m in media" :key="m.src" class="">
        <img :src="require(`@/assets/${m.src}`)" :alt="m.alt">
      </figure>
    </div>
  </div>
</template>

<script>
  import db from '../components/firebaseInit'
  export default {
    name: 'specimen',
    data () {
      return {
        specimen_id: null,
        name: null,
        categories: null,
        description: null,
        media: null,
        featured_image: null,
      }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('specimens').where('specimen_id', '==',
          to.params.specimen_id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              next(vm => {
                vm.specimen_id = doc.data().specimen_id;
                vm.name = doc.data().name;
                vm.categories = doc.data().categories;
                vm.description = doc.data().description;
                vm.media = doc.data().media;
                vm.featured_image = doc.data().featured_image;
              })
            })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        db.collection('specimens').where('specimen_id', '==',
          this.$route.params.specimen_id).get()
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
