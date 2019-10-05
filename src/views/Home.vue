<template>
  <div class="home">
    <ul>
      <li v-for="specimen in specimens" :key="specimen.id">
        <router-link :to="{name: 'specimen', params: {specimen_id: specimen.specimen_id}}">
          <img :src="require(`@/assets/${specimen.featured_image}`)">
          {{ specimen.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import db from '../components/firebaseInit'
export default {
  name: 'home',
  data() {
    return {
      specimens: []
    }
  },
  methods: {
    getSpecimens() {
      db.collection('specimens').get().then(
      querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'specimen_id': doc.data().specimen_id,
            'name': doc.data().name,
            'description': doc.data().description,
            'featured_image': doc.data().featured_image,
            'categories': doc.data().categories,
          }
          this.specimens.push(data)
        })
      })
    }
  },
  created() {
    this.getSpecimens();
  }
}
</script>
