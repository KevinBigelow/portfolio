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
  import { db } from '../main'
  export default {
    name: 'home',
    data() {
      return {
        specimens: []
      }
    },
    firestore () {
      return {
        specimens: db.collection('specimens')
      }
    }
  }
</script>
