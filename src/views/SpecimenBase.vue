<template>
  <div class="specimen">
    <h1>{{ specimen.name }}</h1>
    <h2 class="has-text-primary"><span v-for="(category, index) in specimen.categories" :key="index">{{ category }}</span></h2>
    <p>{{ specimen.description }}</p>
    <div class="panel">
      <figure v-for="image in specimen.images" :key="image.src" class="">
        <img :src="require(`@/assets/${image.src}`)" :alt="image.alt">
      </figure>
    </div>
  </div>
</template>
X