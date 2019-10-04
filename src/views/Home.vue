<template>
  <div class="home">
    <div class="columns">
      <div class="column is-one-third has-background-primary">
        First column
      </div>
      <div class="column is-two-thirds has-background-success">
        Second column
      </div>
    </div>
    <div class="columns">
      <div class="column is-two-thirds has-background-danger">
        Third column
      </div>
      <div class="column is-one-third has-background-warning">
        Fourth column
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-third has-background-warning">
        Fifth column
      </div>
      <div class="column is-two-thirds has-background-primary">
        Sixth column
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
